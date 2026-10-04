import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const API = "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  async function loadTasks() {
    const response = await fetch(`${API}/api/tasks`);
    setTasks(await response.json());
  }

  useEffect(() => { loadTasks(); }, []);

  async function addTask(e) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(`${API}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    setTitle("");
    loadTasks();
  }

  async function toggle(task) {
    await fetch(`${API}/api/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });
    loadTasks();
  }

  async function remove(id) {
    await fetch(`${API}/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
  }

  async function health() {
    try {
      const r = await fetch(`${API}/health`);
      const data = await r.json();
      setStatus(`${data.status} • DB ${data.database}`);
    } catch {
      setStatus("API unavailable");
    }
  }

  return (
    <main>
      <section className="card">
        <h1>☁️ Cloud Task Manager</h1>
        <p>Docker + REST API + PostgreSQL + CI/CD</p>

        <form onSubmit={addTask}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a task..." />
          <button>Add Task</button>
        </form>

        <div className="actions">
          <button onClick={health}>Check API Health</button>
          {status && <span>{status}</span>}
        </div>

        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <label>
                <input type="checkbox" checked={task.completed} onChange={() => toggle(task)} />
                <span className={task.completed ? "done" : ""}>{task.title}</span>
              </label>
              <button onClick={() => remove(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

# Cloud & DevOps Capstone Project

## Cloud-Based Task Management System

A containerized full-stack task management application designed to demonstrate:
- Git/GitHub
- Docker & Docker Compose
- CI/CD with GitHub Actions
- Cloud deployment
- Managed PostgreSQL
- Authentication
- Health monitoring

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Containers: Docker
- CI/CD: GitHub Actions

## Run locally

1. Copy environment file:
   `cp backend/.env.example backend/.env`

2. Start:
   `docker compose up --build`

3. Open:
   - Frontend: http://localhost:3000
   - Backend health: http://localhost:5000/health

## Git
```bash
git init
git add .
git commit -m "Initial capstone project"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY>
git push -u origin main
```

## Production
Use a managed PostgreSQL database and configure DATABASE_URL and JWT_SECRET as cloud secrets/environment variables. Extend `.github/workflows/ci-cd.yml` with your selected cloud provider deployment step.

## Project structure
frontend/     React frontend
backend/      Express REST API
.github/      CI/CD workflow
docs/         Architecture diagram
docker-compose.yml

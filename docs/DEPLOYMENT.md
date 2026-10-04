# Deployment Checklist

1. Create a cloud VM/container service.
2. Create a managed PostgreSQL database.
3. Create a container registry.
4. Configure:
   - DATABASE_URL
   - JWT_SECRET
5. Push repository to GitHub.
6. Configure GitHub Actions secrets.
7. Build and push Docker images.
8. Deploy containers.
9. Expose the application through HTTPS.
10. Verify `/health`.
11. Configure cloud logs and monitoring.

Do not commit real credentials or `.env` files.

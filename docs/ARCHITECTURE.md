# Architecture

```text
User Browser
     |
     v
Cloud / Reverse Proxy
     |
     +------------------+
     |                  |
     v                  v
React Frontend      Node.js REST API
     |                  |
     +------------------+
                        |
                        v
                Managed PostgreSQL
                        |
                        v
                 Monitoring / Logs

GitHub -> GitHub Actions -> Docker Build -> Registry -> Cloud Deployment
```

## DevOps lifecycle

Code -> Git -> CI -> Test -> Docker Build -> Registry -> Deploy -> Monitor

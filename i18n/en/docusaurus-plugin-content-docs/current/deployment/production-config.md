---
sidebar_label: Production Config
sidebar_position: 2
---

# Production Environment Configuration

## Docker Compose Configuration

The production environment uses `docker-compose.prod.yml`, which includes the full service stack:

- **Backend**: FastAPI application running via Uvicorn
- **Frontend**: Built static frontend assets
- **PostgreSQL**: Persistent data volume
- **Redis**: Cache and task queue
- **Neo4j**: Knowledge graph storage

## Volume Management

Database data is persisted to the host via Docker volumes to ensure data is not lost.

## Environment Variables

Configured through `docker/.env.production`, required fields:

```env
POSTGRES_PASSWORD=your_secure_password
REDIS_PASSWORD=your_secure_redis_password
NEO4J_PASSWORD=your_secure_neo4j_password
SECRET_KEY=$(openssl rand -hex 32)
ENCRYPTION_KEY=$(openssl rand -base64 32)
CORS_ORIGINS=https://yourdomain.com
ADMIN_PASSWORD=your_admin_password
```

## Version Management

Unified version management via the `scripts/build.sh` script ensures consistency between frontend, backend, and Docker image versions.

---
sidebar_label: Environment Variables
sidebar_position: 1
---

# Environment Variables

The backend manages all environment variables through `config.py`, supporting both default values and custom configurations.

## Development Environment

The development environment uses default values in `config.py` (`localhost` + `sparknoteai123`), requiring no additional configuration to connect to Docker infrastructure.

## Production Environment

Configured via `docker/.env.production`, injected into containers by docker-compose.

### Environment Variable List

| Variable | Description | Required (Production) | Default |
|----------|-------------|----------------------|---------|
| `POSTGRES_USER` | Database username | No | `postgres` |
| `POSTGRES_PASSWORD` | Database password | Yes | - |
| `POSTGRES_DB` | Database name | No | `sparknoteai` |
| `REDIS_PASSWORD` | Redis password | Yes | - |
| `NEO4J_PASSWORD` | Neo4j password | Yes | - |
| `SECRET_KEY` | JWT secret key | Yes | - |
| `ENCRYPTION_KEY` | Encryption key | Yes | - |
| `CORS_ORIGINS` | Allowed frontend origins | Yes | - |
| `ADMIN_USERNAME` | Admin username | No | `admin` |
| `ADMIN_PASSWORD` | Admin password | Yes | - |

### Generating Keys

```bash
# JWT secret key
openssl rand -hex 32

# Encryption key
openssl rand -base64 32
```

## Configuration Template

Copy `docker/.env.example` to `docker/.env.production` and edit:

```bash
cp docker/.env.example docker/.env.production
```

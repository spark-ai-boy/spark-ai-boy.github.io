---
sidebar_label: Docker Deployment
sidebar_position: 1
---

# Docker Quick Deployment

Use Docker Compose to quickly start a complete production environment.

## 1. Clone the Repository

```bash
git clone https://github.com/spark-ai-boy/SparkNoteAI.git
cd SparkNoteAI
```

## 2. Configure Environment Variables

Copy the environment template:

```bash
cp docker/.env.example docker/.env.production
```

Edit `docker/.env.production` and update the required fields:

| Variable | Description | Generate With |
|----------|-------------|---------------|
| `POSTGRES_PASSWORD` | Database password | Custom |
| `REDIS_PASSWORD` | Redis password | Custom |
| `NEO4J_PASSWORD` | Neo4j password | Custom |
| `SECRET_KEY` | JWT secret key | `openssl rand -hex 32` |
| `ENCRYPTION_KEY` | Encryption key | `openssl rand -base64 32` |
| `CORS_ORIGINS` | Allowed frontend domains | e.g., `https://yourdomain.com` |
| `ADMIN_PASSWORD` | Admin password | Custom |

## 3. Start Services

```bash
./docker/deploy.sh start
```

The deployment script automatically starts all services and initializes the database.

## 4. Access the Application

| Service | URL |
|---------|-----|
| Frontend | `http://your-server-ip` |
| Backend API | `http://your-server-ip:8000` |
| Swagger UI | `http://your-server-ip:8000/docs` |

Default admin account: `admin` / the password you configured.

## Operations Commands

```bash
./docker/deploy.sh status     # Check service status
./docker/deploy.sh logs       # View all logs
./docker/deploy.sh logs backend  # View backend logs
./docker/deploy.sh backup     # Backup database
./docker/deploy.sh stop       # Stop services
./docker/deploy.sh restart    # Restart services
./docker/deploy.sh clean      # Clean all resources (including volumes)
```

## Update Version

```bash
# Build and push new version image
npm run docker:deploy 1.2.0

# Production server: pull and restart
./docker/deploy.sh start
```

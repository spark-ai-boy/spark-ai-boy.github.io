---
sidebar_label: Development Setup
sidebar_position: 2
---

# Development Setup

## Prerequisites

| Dependency | Version |
|------------|---------|
| Node.js | >= 18 |
| Python | >= 3.11 |
| Docker & Docker Compose | Latest |

## 1. Start Infrastructure

```bash
# Start PostgreSQL + Redis + Neo4j
npm run docker:dev:up

# View logs
npm run docker:dev:logs

# Stop infrastructure
npm run docker:dev:down
```

Infrastructure runs in Docker with the following port mappings:

| Service | Port |
|---------|------|
| PostgreSQL | 5432 |
| Redis | 6379 |
| Neo4j | 7474 (Browser) / 7687 (Bolt) |

## 2. Start Backend

```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Start with hot-reload
npm run dev:backend   # uvicorn --reload --host 0.0.0.0 --port 8000
```

The backend automatically creates database tables and the default admin account (`admin/admin123`) on startup.

- **API**: http://localhost:8000
- **Swagger**: http://localhost:8000/docs

The backend `config.py` includes complete default values (`localhost` + `sparknoteai123`), so no additional configuration is needed to connect to Docker infrastructure.

## 3. Start Frontend

```bash
# Install all dependencies (including shared package build)
npm run install:all

# Start Expo Metro
npm run dev:frontend
```

After starting, you can:
- Press `w` to open the web version in a browser
- Scan the QR code to preview on mobile (iOS/Android)
- Run `npm run electron:dev` for desktop

## 4. Start Both Simultaneously

```bash
# Concurrently start backend + frontend
npm run dev:backend & npm run dev:frontend
```

## Common Development Commands

```bash
# Testing
npm run test:backend          # Run backend tests (pytest)
npm run lint                  # TypeScript type checking (tsc --noEmit)

# Build
npm run build:frontend        # Frontend web build
npm run docker:dev:down       # Stop infrastructure

# Electron desktop
npm run electron:dev          # Development mode
npm run electron:build:mac    # Build macOS app
npm run electron:build:win    # Build Windows app
```

## Project Structure

```
SparkNoteAI/
├── apps/
│   ├── backend/          # FastAPI Backend (Python 3.11)
│   └── frontend/         # React Native + Expo (TypeScript)
├── packages/
│   └── shared/           # Shared types and constants
├── docker/
│   ├── docker-compose.dev.yml   # Development environment
│   └── docker-compose.prod.yml  # Production environment
└── scripts/
    └── build.sh          # Docker build script
```

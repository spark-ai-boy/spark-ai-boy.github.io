---
sidebar_label: Docker Deployment
sidebar_position: 1
---

# Docker Deployment Guide

## Build and Push Images

```bash
# Build and push images for the specified version
npm run docker:deploy 1.1.0

# Or step by step
npm run docker:build 1.1.0   # Build
npm run docker:push 1.1.0    # Push to Docker Hub
```

The production compose uses `image: sparknoteai/backend:${APP_VERSION}` and `image: sparknoteai/frontend:${APP_VERSION}`, no longer building from source.

## Deploy to Production Server

```bash
# On the production server
./docker/deploy.sh start
```

## Deployment Architecture

```
┌──────────────────────────────────────────┐
│              Nginx (Host)                 │
│     80 (Frontend)       8000 (Backend)     │
├──────────────────────────────────────────┤
│         Docker Compose (Containers)        │
│  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ Frontend │  │ Backend  │  │   DB    │ │
│  └──────────┘  └──────────┘  └─────────┘ │
│  ┌──────────┐  ┌──────────┐              │
│  │  Redis   │  │  Neo4j   │              │
│  └──────────┘  └──────────┘              │
└──────────────────────────────────────────┘
```

## CI/CD Integration

The build process can be automated in GitHub Actions:

```yaml
name: Build & Push
on:
  push:
    tags: ['v*']
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run docker:deploy ${{ github.ref_name }}
```

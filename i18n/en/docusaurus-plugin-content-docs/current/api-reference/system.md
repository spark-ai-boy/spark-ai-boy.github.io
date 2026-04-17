---
sidebar_label: System
sidebar_position: 6
---

# System API

Base path: `/api/system`

## Health Check

```
GET /api/system/health
```

**Response**:
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "neo4j": "connected",
  "version": "1.1.0"
}
```

## Get Version Information

```
GET /api/system/version
```

**Response**:
```json
{
  "version": "1.1.0",
  "build_date": "2026-04-12"
}
```

---
sidebar_label: 系统
sidebar_position: 6
---

# 系统 API

基础路径：`/api/system`

## 健康检查

```
GET /api/system/health
```

**响应**：
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "neo4j": "connected",
  "version": "1.1.0"
}
```

## 获取版本信息

```
GET /api/system/version
```

**响应**：
```json
{
  "version": "1.1.0",
  "build_date": "2026-04-12"
}
```

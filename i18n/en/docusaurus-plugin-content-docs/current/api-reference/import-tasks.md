---
sidebar_label: Import Tasks
sidebar_position: 3
---

# Import Tasks API

Base path: `/api/tasks`

## Get Task List

```
GET /api/tasks
```

**Query Parameters**:
- `page`: Page number
- `size`: Page size

**Response**: Paginated task list, including task status and progress.

## Create Import Task

```
POST /api/tasks
```

**Request Body**:
```json
{
  "platform": "wechat|xiaohongshu|bilibili|youtube",
  "url": "https://...",
  "content": "Optional directly pasted content"
}
```

## Get Task Detail

```
GET /api/tasks/{id}
```

## Task Status

| Status | Description |
|--------|-------------|
| pending | Queued |
| running | Processing |
| completed | Completed |
| failed | Failed |

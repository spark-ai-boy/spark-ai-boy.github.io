---
sidebar_label: Knowledge Graph
sidebar_position: 4
---

# Knowledge Graph API

Base path: `/api/knowledge-graph`

## Get Graph Data

```
GET /api/knowledge-graph
```

**Response**: Graph node and edge data for frontend visual rendering.

## Build Graph

```
POST /api/knowledge-graph/build
```

Triggers LLM-powered intelligent knowledge graph building. Supports:

- **Full rebuild**: Re-extract concepts and relationships from all notes
- **Incremental update**: Only process newly added or modified notes

## Get Build Status

```
GET /api/knowledge-graph/status
```

**Response**:
```json
{
  "status": "idle|building|completed|failed",
  "progress": 75,
  "message": "Processing..."
}
```

The frontend polls this endpoint in real time to get build progress.

## Node-Note Association

Graph nodes can be linked to their corresponding notes. Clicking a node displays the related note content.

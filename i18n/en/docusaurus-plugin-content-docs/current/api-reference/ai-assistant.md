---
sidebar_label: AI Assistant
sidebar_position: 5
---

# AI Assistant API

Base path: `/api/ai-assistant`

## Send Chat Message

```
POST /api/ai-assistant/chat
```

**Request Body**:
```json
{
  "message": "Hello, please introduce SparkNoteAI",
  "session_id": "Optional, used for multi-turn conversation"
}
```

**Response**:
```json
{
  "response": "SparkNoteAI is a...",
  "session_id": "abc123"
}
```

## SSE Streaming Response

```
POST /api/ai-assistant/chat/stream
```

Implements character-by-character output via Server-Sent Events. Request format is the same as regular chat. Responses are returned in `text/event-stream` format.

## Supported Models

Model selection is configured through `FeatureSetting`, and the backend automatically routes to the corresponding LLM provider.

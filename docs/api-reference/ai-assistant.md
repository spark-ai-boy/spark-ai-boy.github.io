---
sidebar_label: AI 助手
sidebar_position: 5
---

# AI 助手 API

基础路径：`/api/ai-assistant`

## 发送对话消息

```
POST /api/ai-assistant/chat
```

**请求体**：
```json
{
  "message": "你好，请介绍一下 SparkNoteAI",
  "session_id": "可选，用于多轮对话"
}
```

**响应**：
```json
{
  "response": "SparkNoteAI 是一个...",
  "session_id": "abc123"
}
```

## SSE 流式响应

```
POST /api/ai-assistant/chat/stream
```

通过 Server-Sent Events 实现逐字输出，请求格式与普通对话相同。响应以 `text/event-stream` 格式返回。

## 支持的模型

模型选择通过 `FeatureSetting` 配置，后端自动路由到对应的 LLM 提供商。

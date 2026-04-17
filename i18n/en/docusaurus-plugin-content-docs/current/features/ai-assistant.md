---
sidebar_label: AI Assistant
sidebar_position: 4
---

# AI Assistant

The AI assistant provides the ability to converse with large language models, supporting multi-model switching and SSE streaming output.

## Supported LLM Providers

| Provider | Description |
|----------|-------------|
| OpenAI | GPT-4, GPT-3.5 and other models |
| Anthropic | Claude series models |
| Azure OpenAI | Azure-hosted OpenAI services |
| Alibaba Cloud | Tongyi Qianwen and other models |

## Features

### Multi-Model Configuration

- Create multiple LLM configurations
- Set a default configuration
- Support test connection to verify configuration validity

### Conversational Ability

- SSE streaming response for real-time character-by-character output
- Supports multi-turn conversation context
- Switch between different LLM models

### Scene Integration

- Which LLM the AI assistant uses is managed through `FeatureSetting`
- Shares the LLM configuration pool with other features (such as knowledge graph extraction)

![AI Assistant](/img/ai_assistant.png)

## API Overview

For detailed API documentation, see [API Reference - AI Assistant](../api-reference/ai-assistant).

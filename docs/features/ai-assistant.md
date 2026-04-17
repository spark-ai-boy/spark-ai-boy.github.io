---
sidebar_label: AI 助手
sidebar_position: 4
---

# AI 助手

AI 助手提供与大模型对话的能力，支持多模型切换和 SSE 流式输出。

## 支持的 LLM 提供商

| 提供商 | 说明 |
|--------|------|
| OpenAI | GPT-4、GPT-3.5 等模型 |
| Anthropic | Claude 系列模型 |
| Azure OpenAI | Azure 托管的 OpenAI 服务 |
| 阿里云 | 通义千问等模型 |

## 功能特性

### 多模型配置

- 支持创建多个 LLM 配置
- 可设置默认配置
- 支持测试连接验证配置有效性

### 对话能力

- SSE 流式响应，实时逐字输出
- 支持多轮对话上下文
- 可切换不同 LLM 模型

### 场景集成

- AI 助手使用哪个 LLM 通过 `FeatureSetting` 管理
- 与其他功能（如知识图谱提取）共享 LLM 配置池

![AI助手](/img/ai_assistant.png)

## API 概览

详细接口请参考 [API 参考 - AI 助手](../api-reference/ai-assistant)。

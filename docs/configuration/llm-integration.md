---
sidebar_label: LLM 集成
sidebar_position: 2
---

# LLM 集成配置

SparkNoteAI 通过 `Integration` 模型统一管理第三方 LLM 提供商。

## 支持的提供商

| 提供商 | API 格式 |
|--------|----------|
| OpenAI | OpenAI 兼容接口 |
| Anthropic | Anthropic API |
| Azure OpenAI | Azure OpenAI 端点 |
| 阿里云 | 阿里云 DashScope API |

## 多配置管理

- 创建多个 LLM 配置，每个配置包含 API Key、端点、模型名称
- 可设置其中一个为默认配置
- 支持测试连接验证配置是否正确
- 按 provider 字段区分不同提供商

## 场景化使用

不同功能场景可配置不同的 LLM：

- **知识图谱提取**：通过 FeatureSetting 指定图谱构建使用的 LLM
- **AI 助手对话**：通过 FeatureSetting 指定助手对话使用的 LLM
- **内容摘要**：笔记自动摘要使用的 LLM

## 管理界面

在设置页面的「LLM 配置」部分：
1. 添加新配置（选择提供商、填写 API Key 和模型）
2. 测试连接
3. 设为默认
4. 删除不需要的配置

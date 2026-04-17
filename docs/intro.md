---
sidebar_label: 概览
sidebar_position: 1
---

# SparkNoteAI 概览

> **知语拾光** — 让知识如光般照亮你的世界

SparkNoteAI 是一个现代化的知识整理与管理系统，融合了大模型智能总结、知识图谱可视化和多平台内容采集能力，帮助你从碎片化信息中构建结构化知识体系。

## 核心功能

| 功能 | 说明 |
|------|------|
| 📝 笔记管理 | Markdown 编辑器、实时预览、标签分类、笔记导出（ZIP） |
| 📥 碎片采集 | 微信公众号、小红书、B 站、YouTube 多平台导入，后台任务队列异步处理 |
| 🕸️ 知识图谱 | Neo4j 存储，LLM 智能提取概念与关系，2D 力导向图可视化 |
| 🗺️ 思维导图 | 独立思维导图页面，直观展示知识结构 |
| 🤖 AI 助手 | 支持多 LLM 提供商（OpenAI / Anthropic / Azure / 阿里云），可切换模型 |
| 🔍 智能搜索 | 全局搜索能力，快速定位知识内容 |

## 技术架构

```
┌─────────────────────────────────────────────────┐
│                 前端 (React Native + Expo)        │
│    Web / iOS / Android / Electron 桌面端          │
├─────────────────────────────────────────────────┤
│              后端 (FastAPI + Python 3.11)         │
├──────────┬──────────┬───────────────────────────┤
│ PostgreSQL│  Redis   │         Neo4j             │
│  关系数据  │ 缓存+队列 │       知识图谱            │
└──────────┴──────────┴───────────────────────────┘
```

## 快速导航

- **快速开始** → [Docker 部署](./getting-started/quick-start-docker)
- **开发环境** → [开发指南](./getting-started/development-setup)
- **功能介绍** → [功能指南](./features/notes)
- **运维部署** → [部署指南](./deployment/docker-deploy)
- **API 文档** → [API 参考](./api-reference/auth)

## 开源协议

本项目采用 [AGPL-3.0](https://github.com/spark-ai-boy/SparkNoteAI/blob/main/LICENSE) 许可证开源。

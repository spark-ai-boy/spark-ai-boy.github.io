---
sidebar_label: Overview
sidebar_position: 1
---

# SparkNoteAI Overview

> **SparkNoteAI** — Let knowledge illuminate your world like light

SparkNoteAI is a modern knowledge management system that integrates AI-powered summarization, knowledge graph visualization, and multi-platform content collection capabilities, helping you build a structured knowledge体系 from fragmented information.

## Core Features

| Feature | Description |
|---------|-------------|
| Notes | Markdown editor, real-time preview, tag classification, ZIP export |
| Import | WeChat, Xiaohongshu, Bilibili, YouTube multi-platform import with async task queue |
| Knowledge Graph | Neo4j storage, LLM concept extraction, 2D force-directed graph visualization |
| Mind Map | Independent mind map page for knowledge structure display |
| AI Assistant | Multi-LLM support (OpenAI / Anthropic / Azure / Alibaba Cloud), switchable models |
| Search | Global search for quick content discovery |

## Tech Architecture

```
+-------------------------------------------------+
|            Frontend (React Native + Expo)        |
|       Web / iOS / Android / Electron Desktop     |
+-------------------------------------------------+
|           Backend (FastAPI + Python 3.11)        |
+-----------+----------+--------------------------+
| PostgreSQL|  Redis   |         Neo4j            |
|   RDBMS   | Cache+Q  |       Knowledge Graph    |
+-----------+----------+--------------------------+
```

## Quick Navigation

- **Getting Started** → [Docker Deploy](./getting-started/quick-start-docker)
- **Development** → [Setup Guide](./getting-started/development-setup)
- **Features** → [Feature Guide](./features/notes)
- **Deployment** → [Deployment Guide](./deployment/docker-deploy)
- **API Docs** → [API Reference](./api-reference/auth)

## License

This project is open-sourced under the [AGPL-3.0](https://github.com/spark-ai-boy/SparkNoteAI/blob/main/LICENSE) license.

---
sidebar_label: Docker 部署
sidebar_position: 1
---

# Docker 部署指南

## 构建与推送镜像

```bash
# 构建并推送指定版本的镜像
npm run docker:deploy 1.1.0

# 或分步执行
npm run docker:build 1.1.0   # 构建
npm run docker:push 1.1.0    # 推送到 Docker Hub
```

生产 compose 使用 `image: sparknoteai/backend:${APP_VERSION}` 和 `image: sparknoteai/frontend:${APP_VERSION}`，不再从源码构建。

## 部署到生产服务器

```bash
# 在生产服务器上
./docker/deploy.sh start
```

## 部署架构

```
┌──────────────────────────────────────────┐
│              Nginx (宿主机)               │
│     80 (前端)          8000 (后端)         │
├──────────────────────────────────────────┤
│         Docker Compose (容器)              │
│  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ Frontend │  │ Backend  │  │   DB    │ │
│  └──────────┘  └──────────┘  └─────────┘ │
│  ┌──────────┐  ┌──────────┐              │
│  │  Redis   │  │  Neo4j   │              │
│  └──────────┘  └──────────┘              │
└──────────────────────────────────────────┘
```

## CI/CD 集成

可在 GitHub Actions 中自动化构建流程：

```yaml
name: Build & Push
on:
  push:
    tags: ['v*']
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run docker:deploy ${{ github.ref_name }}
```

---
sidebar_label: 开发环境搭建
sidebar_position: 2
---

# 开发环境搭建

## 环境要求

| 依赖 | 版本要求 |
|------|----------|
| Node.js | >= 18 |
| Python | >= 3.11 |
| Docker & Docker Compose | 最新版 |

## 1. 启动基础设施

```bash
# 启动 PostgreSQL + Redis + Neo4j
npm run docker:dev:up

# 查看日志
npm run docker:dev:logs

# 停止基础设施
npm run docker:dev:down
```

基础设施运行在 Docker 中，端口映射：

| 服务 | 端口 |
|------|------|
| PostgreSQL | 5432 |
| Redis | 6379 |
| Neo4j | 7474 (浏览器) / 7687 (Bolt) |

## 2. 启动后端

```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 启动（热重载）
npm run dev:backend   # uvicorn --reload --host 0.0.0.0 --port 8000
```

后端启动后会自动创建数据库表和默认管理员账号（`admin/admin123`）。

- **API**: http://localhost:8000
- **Swagger**: http://localhost:8000/docs

后端 `config.py` 有完整的默认值（`localhost` + `sparknoteai123`），无需额外配置即可连接 Docker 基础设施。

## 3. 启动前端

```bash
# 安装所有依赖（含 shared 包编译）
npm run install:all

# 启动 Expo Metro
npm run dev:frontend
```

启动后可选择：
- 按 `w` 在浏览器中打开 Web 版
- 扫码在手机上预览（iOS/Android）
- 桌面端运行 `npm run electron:dev`

## 4. 同时启动

```bash
# 手动并发启动后端 + 前端
npm run dev:backend & npm run dev:frontend
```

## 常用开发命令

```bash
# 测试
npm run test:backend          # 运行后端测试 (pytest)
npm run lint                  # TypeScript 类型检查 (tsc --noEmit)

# 构建
npm run build:frontend        # 前端 Web 构建
npm run docker:dev:down       # 停止基础设施

# Electron 桌面端
npm run electron:dev          # 开发模式
npm run electron:build:mac    # 构建 macOS 应用
npm run electron:build:win    # 构建 Windows 应用
```

## 项目结构

```
SparkNoteAI/
├── apps/
│   ├── backend/          # FastAPI 后端 (Python 3.11)
│   └── frontend/         # React Native + Expo (TypeScript)
├── packages/
│   └── shared/           # 共享类型和常量
├── docker/
│   ├── docker-compose.dev.yml   # 开发环境
│   └── docker-compose.prod.yml  # 生产环境
└── scripts/
    └── build.sh          # Docker 构建脚本
```

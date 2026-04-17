---
sidebar_label: Docker 部署
sidebar_position: 1
---

# Docker 快速部署

使用 Docker Compose 可以快速启动完整的生产环境。

## 1. 克隆项目

```bash
git clone https://github.com/spark-ai-boy/SparkNoteAI.git
cd SparkNoteAI
```

## 2. 配置环境变量

复制环境变量模板：

```bash
cp docker/.env.example docker/.env.production
```

编辑 `docker/.env.production`，修改以下必填项：

| 变量 | 说明 | 生成方式 |
|------|------|----------|
| `POSTGRES_PASSWORD` | 数据库密码 | 自定义 |
| `REDIS_PASSWORD` | Redis 密码 | 自定义 |
| `NEO4J_PASSWORD` | Neo4j 密码 | 自定义 |
| `SECRET_KEY` | JWT 密钥 | `openssl rand -hex 32` |
| `ENCRYPTION_KEY` | 加密密钥 | `openssl rand -base64 32` |
| `CORS_ORIGINS` | 允许的前端域名 | 如 `https://yourdomain.com` |
| `ADMIN_PASSWORD` | 管理员密码 | 自定义 |

## 3. 启动服务

```bash
./docker/deploy.sh start
```

部署脚本会自动启动所有服务并初始化数据库。

## 4. 访问应用

| 服务 | 地址 |
|------|------|
| 前端 | `http://your-server-ip` |
| 后端 API | `http://your-server-ip:8000` |
| Swagger UI | `http://your-server-ip:8000/docs` |

默认管理员账号：`admin` / 你在配置中设置的密码。

## 运维命令

```bash
./docker/deploy.sh status     # 查看服务状态
./docker/deploy.sh logs       # 查看所有日志
./docker/deploy.sh logs backend  # 查看后端日志
./docker/deploy.sh backup     # 备份数据库
./docker/deploy.sh stop       # 停止服务
./docker/deploy.sh restart    # 重启服务
./docker/deploy.sh clean      # 清理所有资源（含数据卷）
```

## 更新版本

```bash
# 构建并推送新版本镜像
npm run docker:deploy 1.2.0

# 生产服务器拉取并重启
./docker/deploy.sh start
```

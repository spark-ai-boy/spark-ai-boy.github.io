---
sidebar_label: 生产配置
sidebar_position: 2
---

# 生产环境配置

## Docker Compose 配置

生产环境使用 `docker-compose.prod.yml`，包含完整的服务栈：

- **Backend**：FastAPI 应用，通过 Uvicorn 运行
- **Frontend**：构建后的静态前端
- **PostgreSQL**：持久化数据卷
- **Redis**：缓存和任务队列
- **Neo4j**：知识图谱存储

## 数据卷管理

数据库数据通过 Docker 数据卷持久化到宿主机，确保数据不丢失。

## 环境变量

通过 `docker/.env.production` 配置，必填项：

```env
POSTGRES_PASSWORD=your_secure_password
REDIS_PASSWORD=your_secure_redis_password
NEO4J_PASSWORD=your_secure_neo4j_password
SECRET_KEY=$(openssl rand -hex 32)
ENCRYPTION_KEY=$(openssl rand -base64 32)
CORS_ORIGINS=https://yourdomain.com
ADMIN_PASSWORD=your_admin_password
```

## 版本管理

统一版本管理，通过 `scripts/build.sh` 脚本确保前后端和 Docker 镜像版本一致。

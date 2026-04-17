---
sidebar_label: 环境变量
sidebar_position: 1
---

# 环境变量

后端通过 `config.py` 管理所有环境变量，支持默认值和自定义配置。

## 开发环境

开发环境使用 `config.py` 中的默认值（`localhost` + `sparknoteai123`），无需额外配置即可连接 Docker 基础设施。

## 生产环境

通过 `docker/.env.production` 配置，由 docker-compose 注入容器。

### 环境变量列表

| 变量名 | 说明 | 必填（生产） | 默认值 |
|--------|------|-------------|--------|
| `POSTGRES_USER` | 数据库用户名 | 否 | `postgres` |
| `POSTGRES_PASSWORD` | 数据库密码 | 是 | - |
| `POSTGRES_DB` | 数据库名 | 否 | `sparknoteai` |
| `REDIS_PASSWORD` | Redis 密码 | 是 | - |
| `NEO4J_PASSWORD` | Neo4j 密码 | 是 | - |
| `SECRET_KEY` | JWT 密钥 | 是 | - |
| `ENCRYPTION_KEY` | 加密密钥 | 是 | - |
| `CORS_ORIGINS` | 允许的前端域名 | 是 | - |
| `ADMIN_USERNAME` | 管理员用户名 | 否 | `admin` |
| `ADMIN_PASSWORD` | 管理员密码 | 是 | - |

### 生成密钥

```bash
# JWT 密钥
openssl rand -hex 32

# 加密密钥
openssl rand -base64 32
```

## 配置模板

复制 `docker/.env.example` 为 `docker/.env.production` 后编辑：

```bash
cp docker/.env.example docker/.env.production
```

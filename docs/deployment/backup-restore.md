---
sidebar_label: 备份与恢复
sidebar_position: 4
---

# 备份与恢复

## 数据库备份

```bash
# 备份数据库
./docker/deploy.sh backup
```

底层使用 `pg_dump` 进行 PostgreSQL 数据库备份。

## 数据卷备份

```bash
# 备份数据卷
docker run --rm -v sparknoteai_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .
```

## 恢复数据库

```bash
# 恢复数据库
docker run --rm -v sparknoteai_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data
```

## 完整备份流程

1. 停止服务：`./docker/deploy.sh stop`
2. 备份数据卷
3. （可选）备份配置文件
4. 完成后重启：`./docker/deploy.sh start`

## 建议

- 定期自动备份（可通过 cron 定时任务）
- 备份文件存储到远程位置（如 S3/OSS）
- 定期测试恢复流程确保备份有效

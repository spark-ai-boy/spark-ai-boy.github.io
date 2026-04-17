---
sidebar_label: Backup & Restore
sidebar_position: 4
---

# Backup and Restore

## Database Backup

```bash
# Backup database
./docker/deploy.sh backup
```

Uses `pg_dump` under the hood for PostgreSQL database backup.

## Volume Backup

```bash
# Backup data volume
docker run --rm -v sparknoteai_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .
```

## Database Restore

```bash
# Restore database
docker run --rm -v sparknoteai_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data
```

## Complete Backup Procedure

1. Stop services: `./docker/deploy.sh stop`
2. Backup data volumes
3. (Optional) Backup configuration files
4. Restart after completion: `./docker/deploy.sh start`

## Recommendations

- Set up regular automated backups (via cron scheduled tasks)
- Store backup files in a remote location (e.g., S3/OSS)
- Periodically test the restore process to ensure backups are valid

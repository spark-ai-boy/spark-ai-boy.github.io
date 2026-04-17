---
sidebar_label: Nginx 配置
sidebar_position: 3
---

# Nginx 反向代理

生产环境通过宿主机的 Nginx 反向代理前端和后端服务。

## 代理规则

```nginx
# 前端代理
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

# 后端 API 代理
server {
    listen 8000;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## HTTPS 配置

建议添加 SSL 证书以启用 HTTPS，可使用 Let's Encrypt 免费证书。

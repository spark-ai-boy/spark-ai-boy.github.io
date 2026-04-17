---
sidebar_label: Nginx Configuration
sidebar_position: 3
---

# Nginx Reverse Proxy

In production, the host machine's Nginx serves as a reverse proxy for both frontend and backend services.

## Proxy Rules

```nginx
# Frontend proxy
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

# Backend API proxy
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

## HTTPS Configuration

It is recommended to add an SSL certificate to enable HTTPS. You can use a free Let's Encrypt certificate.

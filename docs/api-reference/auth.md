---
sidebar_label: 认证
sidebar_position: 1
---

# 认证 API

基础路径：`/api/auth`

## 用户注册

```
POST /api/auth/register
```

**请求体**：
```json
{
  "username": "string",
  "password": "string"
}
```

**响应**：创建成功返回用户信息。

## 用户登录

```
POST /api/auth/login
```

**请求体**（OAuth2PasswordRequestForm）：
```
username=admin&password=admin123
```

**响应**：
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer"
}
```

## 获取当前用户

```
GET /api/auth/me
```

**请求头**：`Authorization: Bearer <token>`

**响应**：当前登录用户信息。

## 双因素认证（TOTP）

支持 TOTP 两步验证，登录后需要额外提供 6 位动态验证码。

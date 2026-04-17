---
sidebar_label: Authentication
sidebar_position: 1
---

# Authentication API

Base path: `/api/auth`

## User Registration

```
POST /api/auth/register
```

**Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```

**Response**: Returns user information on successful creation.

## User Login

```
POST /api/auth/login
```

**Request Body** (OAuth2PasswordRequestForm):
```
username=admin&password=admin123
```

**Response**:
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer"
}
```

## Get Current User

```
GET /api/auth/me
```

**Request Header**: `Authorization: Bearer <token>`

**Response**: Information of the currently logged-in user.

## Two-Factor Authentication (TOTP)

Supports TOTP two-step verification. After login, an additional 6-digit dynamic verification code is required.

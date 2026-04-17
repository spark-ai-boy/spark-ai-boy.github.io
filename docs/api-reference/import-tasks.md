---
sidebar_label: 导入任务
sidebar_position: 3
---

# 导入任务 API

基础路径：`/api/tasks`

## 获取任务列表

```
GET /api/tasks
```

**查询参数**：
- `page`：页码
- `size`：每页大小

**响应**：任务列表（分页），包含任务状态和进度。

## 创建导入任务

```
POST /api/tasks
```

**请求体**：
```json
{
  "platform": "wechat|xiaohongshu|bilibili|youtube",
  "url": "https://...",
  "content": "可选的直接粘贴的内容"
}
```

## 获取任务详情

```
GET /api/tasks/{id}
```

## 任务状态

| 状态 | 说明 |
|------|------|
| pending | 排队中 |
| running | 处理中 |
| completed | 完成 |
| failed | 失败 |

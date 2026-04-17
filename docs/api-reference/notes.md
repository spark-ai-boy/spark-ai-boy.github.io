---
sidebar_label: 笔记
sidebar_position: 2
---

# 笔记 API

基础路径：`/api/notes`

## 获取笔记列表

```
GET /api/notes
```

**查询参数**：
- `page`：页码（默认 1）
- `size`：每页大小（默认 20）
- `tag`：按标签过滤

**响应**（分页格式）：
```json
{
  "items": [{"id": 1, "title": "...", ...}],
  "total": 100,
  "page": 1,
  "size": 20,
  "pages": 5
}
```

## 创建笔记

```
POST /api/notes
```

**请求体**：
```json
{
  "title": "笔记标题",
  "content": "Markdown 内容",
  "tags": ["标签1", "标签2"]
}
```

## 获取笔记详情

```
GET /api/notes/{id}
```

## 更新笔记

```
PUT /api/notes/{id}
```

## 删除笔记

```
DELETE /api/notes/{id}
```

## 导出笔记

```
POST /api/notes/export
```

将笔记导出为 ZIP 文件。

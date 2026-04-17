---
sidebar_label: Notes
sidebar_position: 2
---

# Notes API

Base path: `/api/notes`

## Get Note List

```
GET /api/notes
```

**Query Parameters**:
- `page`: Page number (default 1)
- `size`: Page size (default 20)
- `tag`: Filter by tag

**Response** (paginated format):
```json
{
  "items": [{"id": 1, "title": "...", ...}],
  "total": 100,
  "page": 1,
  "size": 20,
  "pages": 5
}
```

## Create Note

```
POST /api/notes
```

**Request Body**:
```json
{
  "title": "Note Title",
  "content": "Markdown content",
  "tags": ["Tag 1", "Tag 2"]
}
```

## Get Note Detail

```
GET /api/notes/{id}
```

## Update Note

```
PUT /api/notes/{id}
```

## Delete Note

```
DELETE /api/notes/{id}
```

## Export Notes

```
POST /api/notes/export
```

Export notes as a ZIP file.

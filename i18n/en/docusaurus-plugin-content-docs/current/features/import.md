---
sidebar_label: Content Import
sidebar_position: 2
---

# Content Import

SparkNoteAI supports collecting fragmented content from multiple content platforms and consolidating it into a unified knowledge management system.

## Supported Platforms

| Platform | Description |
|----------|-------------|
| WeChat Official Accounts | Scrape full WeChat articles, automatically handle Chinese punctuation, extract original tags |
| Xiaohongshu (RED) | Import Xiaohongshu note content |
| Bilibili | Collect Bilibili video information and comments |
| YouTube | Collect YouTube video information and subtitles |

## How It Works

1. **Submit Task**: Enter a content URL or paste content directly in the frontend
2. **Asynchronous Processing**: The backend processes imports asynchronously via a Redis-backed task queue
3. **Status Tracking**: View task progress in real time (Queued -> Processing -> Completed/Failed)
4. **Content Consolidation**: After successful import, content is automatically categorized as fragments and viewable on the fragments page

![Import](/img/import.png)

![Background Tasks](/img/tasks.png)

## Task Management

- Paginated task list display
- Real-time task status and progress viewing
- Error messages available for failed tasks

## HTML Content Processing

During import, the system automatically handles:
- HTML tag cleanup and conversion
- Chinese punctuation optimization
- Image link extraction and downloading
- Mapping platform-specific tags to system tags

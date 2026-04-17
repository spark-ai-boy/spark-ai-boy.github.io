---
sidebar_label: Note Management
sidebar_position: 1
---

# Note Management

Note management is one of the core features of SparkNoteAI, providing full Markdown editing, tag categorization, and export capabilities.

## Features

### Markdown Editor

- Obsidian-style Markdown editor powered by md-editor-rt
- Real-time preview with side-by-side or stacked layout modes
- Formatting toolbar: headings, bold, italic, code blocks, lists, and more
- Code syntax highlighting support

### Tag System

- Add tags to notes with customizable tag colors
- Sidebar tag filtering to browse notes by tag
- Tag management interface supports creating, editing, and deleting tags
- Confirmation dialog when deleting tags to prevent accidental removal

### Note List

- Three-column layout: left sidebar (tags) + middle (note list) + right (editor)
- Real-time preview and content detail display
- Filter notes by tag

### Export

- Export notes as ZIP files
- Includes Markdown source files and related assets

![Notes](/img/notes.png)

## API Overview

Note-related APIs are accessed through the `/api/notes` endpoint with pagination support. For detailed API documentation, see [API Reference - Notes](../api-reference/notes).

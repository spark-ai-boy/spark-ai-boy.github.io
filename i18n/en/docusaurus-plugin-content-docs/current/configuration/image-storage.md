---
sidebar_label: Image Storage
sidebar_position: 3
---

# Image Storage Configuration

SparkNoteAI supports multiple image storage methods that can be switched in settings.

## Storage Methods

| Method | Description |
|--------|-------------|
| Local Storage | Images are saved to the server's local file system |
| Lsky Pro | Use Lsky Pro (LSky Pro) for image hosting with CDN acceleration support |

## Multi-Configuration Support

- Supports creating multiple image storage configurations
- A default configuration can be set
- Flexible JSON structure replaces the old configuration approach

## Configuration Management

In the "Image Storage" section of the settings page:
1. Add a storage configuration (select storage method, enter connection info)
2. Test connection
3. Set as default configuration

## Frontend Image Upload

The frontend supports image upload functionality, automatically using the default image storage configuration.

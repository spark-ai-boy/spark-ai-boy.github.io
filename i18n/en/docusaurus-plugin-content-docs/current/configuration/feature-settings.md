---
sidebar_label: Feature Settings
sidebar_position: 4
---

# Feature Settings Configuration

The `FeatureSetting` model manages configurations for various functional scenarios, enabling flexible binding between scenarios and resources like LLMs.

## Supported Scenarios

| Scenario | Description |
|----------|-------------|
| Knowledge Graph | Configure the LLM used for graph building and concept extraction |
| AI Assistant | Configure the LLM model used for assistant conversations |
| Content Summarization | Configure the LLM used for automatic note summarization |

## Configuration Method

- Each scenario is configured independently with different LLM options
- Managed via the `/api/feature-settings` API
- The frontend provides a visual configuration interface in the settings page
- Supports configuration grouping and dynamic expansion

## Usage Example

Suppose you have configured both GPT-4 and Claude:

- Use GPT-4 for knowledge graph extraction (strong concept extraction capability)
- Use Claude for AI assistant conversations (better conversational experience)
- Use a lower-cost model for content summarization

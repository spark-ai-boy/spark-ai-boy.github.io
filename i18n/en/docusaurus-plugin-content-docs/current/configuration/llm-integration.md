---
sidebar_label: LLM Integration
sidebar_position: 2
---

# LLM Integration Configuration

SparkNoteAI manages third-party LLM providers through the `Integration` model.

## Supported Providers

| Provider | API Format |
|----------|------------|
| OpenAI | OpenAI-compatible interface |
| Anthropic | Anthropic API |
| Azure OpenAI | Azure OpenAI endpoint |
| Alibaba Cloud | Alibaba Cloud DashScope API |

## Multi-Configuration Management

- Create multiple LLM configurations, each containing an API Key, endpoint, and model name
- Set one configuration as the default
- Support test connection to verify configuration correctness
- Different providers are distinguished by the `provider` field

## Scenario-Based Usage

Different functional scenarios can be configured with different LLMs:

- **Knowledge Graph Extraction**: Use FeatureSetting to specify the LLM for graph building
- **AI Assistant Chat**: Use FeatureSetting to specify the LLM for assistant conversations
- **Content Summarization**: LLM used for automatic note summarization

## Management Interface

In the "LLM Configuration" section of the settings page:
1. Add a new configuration (select provider, enter API Key and model)
2. Test connection
3. Set as default
4. Delete unnecessary configurations

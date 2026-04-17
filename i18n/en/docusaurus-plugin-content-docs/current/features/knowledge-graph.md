---
sidebar_label: Knowledge Graph
sidebar_position: 3
---

# Knowledge Graph

The knowledge graph is a highlight feature of SparkNoteAI. It uses LLM-powered intelligent extraction of concepts and relationships, stored in Neo4j graph database with visual display.

## Core Capabilities

### LLM-Powered Extraction

- Calls the configured LLM model (OpenAI / Anthropic / Azure / Alibaba Cloud) to automatically analyze note content
- Extracts key concepts and relationships between concepts
- Concept normalization: merges similar concepts to improve reusability
- Supports both full rebuild and incremental update modes

### Graph Storage

- Uses Neo4j graph database to store nodes and edges
- `GraphNode` model stores concept information
- `GraphEdge` model stores relationships between concepts
- Nodes can be linked to their corresponding notes

### Visual Display

- 2D force-directed graph visualization (react-force-graph)
- Nodes rendered with lucide icons
- Supports node dragging and zooming
- Real-time polling displays graph build progress

![Knowledge Graph](/img/knowledge_graph.png)

## Scene Configuration

Which LLM model the knowledge graph uses is managed through `FeatureSetting` and can be modified in the settings page. Supports:

- Selecting different LLM providers
- Configuring model parameters
- Build status management: maintains LLM configuration state during rebuilds and marks build-in-progress

## Usage Flow

1. **Configure LLM**: Set up the LLM for knowledge graph in the settings page
2. **Build Graph**: Trigger the knowledge graph build task
3. **View Status**: Check build progress via status polling
4. **Explore Graph**: Drag and explore concept relationships in the force-directed graph

## API Overview

For detailed API documentation, see [API Reference - Knowledge Graph](../api-reference/knowledge-graph).

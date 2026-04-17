---
sidebar_label: 知识图谱
sidebar_position: 4
---

# 知识图谱 API

基础路径：`/api/knowledge-graph`

## 获取图谱数据

```
GET /api/knowledge-graph
```

**响应**：图谱节点和边数据，用于前端可视化渲染。

## 构建图谱

```
POST /api/knowledge-graph/build
```

触发 LLM 智能构建知识图谱。支持：

- **全量构建**：从所有笔记重新提取概念和关系
- **增量更新**：仅处理新增或修改的笔记

## 获取构建状态

```
GET /api/knowledge-graph/status
```

**响应**：
```json
{
  "status": "idle|building|completed|failed",
  "progress": 75,
  "message": "正在处理中..."
}
```

前端通过轮询此接口实时获取构建进度。

## 节点关联笔记

图谱节点可关联到对应的笔记，点击节点可查看相关笔记内容。

---
sidebar_label: Git 工作流
sidebar_position: 2
---

# Git 工作流

## Commit Message 格式

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Type 类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响代码运行） |
| `refactor` | 重构 |
| `perf` | 性能优化 |
| `test` | 测试 |
| `chore` | 构建/工具改动 |

## Scope 范围

`frontend`、`backend`、`shared`、`api`、`ui`、`db`、`auth`

## 示例

```
feat(frontend): 添加笔记编辑器组件

- 支持 Markdown 预览
- 添加实时保存功能

Closes #123
```

```
fix(backend): 修复用户登录时密码校验失败问题

使用 bcrypt 替代 passlib 的默认实现
```

```
refactor(api): 重构导入任务接口

提取公共逻辑到 service 层
```

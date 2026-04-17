---
sidebar_label: Git Workflow
sidebar_position: 2
---

# Git Workflow

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Type Values

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation update |
| `style` | Code formatting (no code behavior change) |
| `refactor` | Refactoring |
| `perf` | Performance optimization |
| `test` | Testing |
| `chore` | Build/tooling changes |

## Scope Values

`frontend`, `backend`, `shared`, `api`, `ui`, `db`, `auth`

## Examples

```
feat(frontend): add note editor component

- Support Markdown preview
- Add real-time save functionality

Closes #123
```

```
fix(backend): fix password verification failure on user login

Use bcrypt instead of passlib default implementation
```

```
refactor(api): refactor import task interface

Extract common logic to service layer
```

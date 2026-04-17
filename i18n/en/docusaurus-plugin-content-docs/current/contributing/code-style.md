---
sidebar_label: Code Style
sidebar_position: 1
---

# Code Style Guidelines

## Naming Conventions

| Type | Frontend (TypeScript) | Backend (Python) |
|------|----------------------|------------------|
| Variables/Functions | camelCase | snake_case |
| Classes/Interfaces | PascalCase | PascalCase |
| Constants | UPPER_SNAKE_CASE | UPPER_SNAKE_CASE |
| Files | kebab-case | snake_case |

## Frontend Code Style

- Use `React.FC` to define components
- Use `StyleSheet.create` to create styles
- Prefer theme colors, avoid hardcoding
- Icons must use `lucide-react-native` uniformly

## Backend Code Style

- SQLAlchemy 2.0 `select()` syntax
- Pydantic v2 data validation
- Encapsulate complex queries in the Service layer
- Error handling: HTTPException + global exception handler

## Error Handling

- Frontend: try-catch + Toast/Alert notifications
- Backend: HTTPException + global exception handler for unified response format

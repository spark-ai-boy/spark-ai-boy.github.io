---
sidebar_label: 代码风格
sidebar_position: 1
---

# 代码风格规范

## 命名规范

| 类型 | 前端 (TypeScript) | 后端 (Python) |
|------|-------------------|---------------|
| 变量/函数 | camelCase | snake_case |
| 类/接口 | PascalCase | PascalCase |
| 常量 | UPPER_SNAKE_CASE | UPPER_SNAKE_CASE |
| 文件 | kebab-case | snake_case |

## 前端代码风格

- 使用 `React.FC` 定义组件
- 使用 `StyleSheet.create` 创建样式
- 优先使用主题色，避免硬编码
- 图标统一使用 `lucide-react-native`

## 后端代码风格

- SQLAlchemy 2.0 `select()` 语法
- Pydantic v2 数据验证
- 复杂查询封装到 Service 层
- 错误处理：HTTPException + 全局异常处理器

## 错误处理

- 前端：try-catch + Toast/Alert 提示
- 后端：HTTPException + 全局异常处理器统一返回格式

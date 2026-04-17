---
sidebar_label: 项目规则
sidebar_position: 3
---

# 项目开发规则

## 图标使用规范

- **所有图标必须使用 `lucide-react-native`**
- 禁止直接使用其他图标库
- 图标统一从 `src/components/icons/index.tsx` 导入

```tsx
import { SparklesIcon, SettingsIcon } from '@/components/icons';
<SparklesIcon size={24} color={colors.primary} />
```

## 前端结构

```
src/
├── api/              # API 客户端
├── components/       # UI 组件
├── navigation/       # 路由导航
├── screens/          # 页面组件
├── stores/           # Zustand 状态管理
├── theme/            # 主题配置
└── types/            # TypeScript 类型
```

## 后端结构

```
app/
├── api/              # API 路由
├── core/             # 核心配置
├── models/           # SQLAlchemy 模型
├── schemas/          # Pydantic Schema
├── services/         # 业务逻辑层
└── utils/            # 工具函数
```

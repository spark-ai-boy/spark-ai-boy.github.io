---
sidebar_label: Project Rules
sidebar_position: 3
---

# Project Development Rules

## Icon Usage Guidelines

- **All icons must use `lucide-react-native`**
- Direct use of other icon libraries is prohibited
- Icons must be imported uniformly from `src/components/icons/index.tsx`

```tsx
import { SparklesIcon, SettingsIcon } from '@/components/icons';
<SparklesIcon size={24} color={colors.primary} />
```

## Frontend Structure

```
src/
├── api/              # API clients
├── components/       # UI components
├── navigation/       # Route navigation
├── screens/          # Page components
├── stores/           # Zustand state management
├── theme/            # Theme configuration
└── types/            # TypeScript types
```

## Backend Structure

```
app/
├── api/              # API routes
├── core/             # Core configuration
├── models/           # SQLAlchemy models
├── schemas/          # Pydantic schemas
├── services/         # Business logic layer
└── utils/            # Utility functions
```

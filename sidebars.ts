import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '概览',
    },
    {
      type: 'category',
      label: '快速开始',
      link: { type: 'generated-index' },
      items: [
        'getting-started/quick-start-docker',
        'getting-started/development-setup',
      ],
    },
    {
      type: 'category',
      label: '功能指南',
      link: { type: 'generated-index' },
      items: [
        'features/notes',
        'features/import',
        'features/knowledge-graph',
        'features/ai-assistant',
        'features/mind-map',
        'features/search',
      ],
    },
    {
      type: 'category',
      label: '配置',
      link: { type: 'generated-index' },
      items: [
        'configuration/environment-variables',
        'configuration/llm-integration',
        'configuration/image-storage',
        'configuration/feature-settings',
      ],
    },
    {
      type: 'category',
      label: '部署',
      link: { type: 'generated-index' },
      items: [
        'deployment/docker-deploy',
        'deployment/production-config',
        'deployment/nginx',
        'deployment/backup-restore',
      ],
    },
    {
      type: 'category',
      label: 'API 参考',
      link: { type: 'generated-index' },
      items: [
        'api-reference/auth',
        'api-reference/notes',
        'api-reference/import-tasks',
        'api-reference/knowledge-graph',
        'api-reference/ai-assistant',
        'api-reference/system',
      ],
    },
    {
      type: 'category',
      label: '贡献指南',
      link: { type: 'generated-index' },
      items: [
        'contributing/code-style',
        'contributing/git-workflow',
        'contributing/rules',
      ],
    },
  ],
};

export default sidebars;

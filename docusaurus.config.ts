import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SparkNoteAI',
  tagline: '知语拾光 — 让知识如光般照亮你的世界',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://spark-ai-boy.github.io',
  baseUrl: '/',
  organizationName: 'spark-ai-boy',
  projectName: 'spark-ai-boy.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: { label: '简体中文', htmlLang: 'zh-CN' },
      en: { label: 'English', htmlLang: 'en' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/spark-ai-boy/SparkNoteAI/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/spark-ai-boy/SparkNoteAI/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SparkNoteAI',
      logo: {
        alt: 'SparkNoteAI Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/changelog', label: '更新日志', position: 'left' },
        { to: '/about', label: '关于', position: 'left' },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/spark-ai-boy/SparkNoteAI',
          label: 'GitHub',
          position: 'right',
        },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            { label: '快速开始', to: '/docs/intro' },
            { label: '功能指南', to: '/docs/features/notes' },
            { label: '部署指南', to: '/docs/deployment/docker-deploy' },
            { label: 'API 参考', to: '/docs/api-reference/auth' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: 'GitHub Issues', href: 'https://github.com/spark-ai-boy/SparkNoteAI/issues' },
            { label: 'GitHub Discussions', href: 'https://github.com/spark-ai-boy/SparkNoteAI/discussions' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '更新日志', to: '/changelog' },
            { label: '许可证', to: '/about' },
            {
              href: 'https://github.com/spark-ai-boy/SparkNoteAI',
              label: 'GitHub',
            },
          ],
        },
      ],
      copyright: `AGPL-3.0 Licensed · Copyright © ${new Date().getFullYear()} SparkNoteAI Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'typescript', 'json', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

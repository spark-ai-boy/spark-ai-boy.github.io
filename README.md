# SparkNoteAI 官方网站

> 知语拾光 — 让知识如光般照亮你的世界

本网站是 [SparkNoteAI](https://github.com/spark-ai-boy/SparkNoteAI) 的官方文档站点，部署在 GitHub Pages 上。

## 本地开发

```bash
npm install
npm start
```

启动后访问 http://localhost:3000

## 构建

```bash
npm run build
```

构建产物在 `build/` 目录。

## 部署

```bash
GIT_USER=spark-ai-boy npm run deploy
```

推送到 `gh-pages` 分支，自动部署到 https://spark-ai-boy.github.io

## 技术栈

- [Docusaurus 3.x](https://docusaurus.io/) — 静态网站生成器
- TypeScript — 类型安全的配置和组件
- 中英双语 i18n 支持

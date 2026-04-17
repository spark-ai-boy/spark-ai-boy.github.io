import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Changelog(): JSX.Element {
  return (
    <Layout title="更新日志" description="SparkNoteAI 更新日志">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">更新日志</Heading>
            <p>所有重要更改记录在此文档中。格式参照 <a href="https://keepachangelog.com/">Keep a Changelog</a>。</p>

            <Heading as="h2">v1.1.0 - 2026-04-12</Heading>
            <Heading as="h3">新增</Heading>
            <ul>
              <li>AI 助手：前后端完整集成，支持多模型对话</li>
              <li>阿里云 Code Plan：LLM 提供商新增阿里云支持</li>
              <li>SSE 流式响应：AI 助手支持 Server-Sent Events 流式输出</li>
              <li>Obsidian 风格 Markdown 编辑器</li>
              <li>主题系统：明暗主题切换，全局主题色应用</li>
              <li>Toast 通知系统：全局通知管理</li>
              <li>小红书导入：实现小红书笔记内容导入</li>
              <li>笔记导出：支持导出笔记为 ZIP 文件</li>
              <li>自动摘要：笔记自动生成摘要功能</li>
              <li>Electron 桌面端：macOS 应用打包支持</li>
            </ul>

            <Heading as="h3">重构</Heading>
            <ul>
              <li>配置系统：重构为统一集成管理（Integration 模型）</li>
              <li>任务系统：重构为通用后台任务系统</li>
              <li>项目结构：名称从 SparkNode 统一更改为 SparkNoteAI</li>
            </ul>

            <Heading as="h3">修复</Heading>
            <ul>
              <li>认证：修复 2FA 登录接口的数据格式和验证逻辑</li>
              <li>NoteEditor：修复深色模式下编辑器背景和文本颜色</li>
              <li>NoteEditor：修复编辑器滚动同步和内容截断问题</li>
            </ul>

            <hr />

            <Heading as="h2">v1.0.0 - 2026-04-03</Heading>
            <Heading as="h3">核心功能</Heading>
            <ul>
              <li>笔记管理：Markdown 编辑器、标签分类、笔记 CRUD</li>
              <li>碎片化内容采集：微信公众号、B 站、YouTube 多平台导入</li>
              <li>知识图谱：Neo4j 存储，LLM 智能提取，2D 力导向图可视化</li>
              <li>AI 助手：流式聊天，多 LLM 支持</li>
              <li>用户认证：OAuth2 + JWT，双因素认证（TOTP）</li>
              <li>Docker Compose 开发/生产双环境配置</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

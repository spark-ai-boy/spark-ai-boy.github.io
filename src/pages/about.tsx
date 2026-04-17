import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout title="关于" description="关于 SparkNoteAI">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">关于 SparkNoteAI</Heading>

            <div className={styles.card}>
              <Heading as="h2">项目介绍</Heading>
              <p>
                SparkNoteAI（知语拾光）是一个现代化的知识整理与管理系统，融合了大模型智能总结、知识图谱可视化和多平台内容采集能力。
                帮助你从碎片化信息中构建结构化知识体系。
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h2">技术栈</Heading>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <Heading as="h4">后端</Heading>
                  <p>FastAPI + SQLAlchemy + PostgreSQL + Redis + Neo4j</p>
                </div>
                <div className={styles.techItem}>
                  <Heading as="h4">前端</Heading>
                  <p>React Native + Expo + TypeScript + Zustand</p>
                </div>
                <div className={styles.techItem}>
                  <Heading as="h4">桌面端</Heading>
                  <p>Electron</p>
                </div>
                <div className={styles.techItem}>
                  <Heading as="h4">部署</Heading>
                  <p>Docker Compose + Nginx</p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <Heading as="h2">致谢</Heading>
              <p>感谢以下开源项目与技术：</p>
              <ul>
                <li>FastAPI - 现代高性能 Python Web 框架</li>
                <li>React Native + Expo - 跨平台移动应用开发</li>
                <li>SQLAlchemy - Python ORM 框架</li>
                <li>PostgreSQL / Redis / Neo4j - 数据库服务</li>
                <li>Zustand - 轻量状态管理</li>
                <li>Lucide Icons - 统一图标库</li>
                <li>Electron - 跨平台桌面应用框架</li>
              </ul>
            </div>

            <div className={styles.card}>
              <Heading as="h2">许可证</Heading>
              <p>
                本项目采用 <strong>AGPL-3.0</strong> 许可证开源。
                详见 <a href="https://github.com/spark-ai-boy/SparkNoteAI/blob/main/LICENSE">LICENSE</a> 文件。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

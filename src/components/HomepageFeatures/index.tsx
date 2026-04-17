import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '📝',
    title: '笔记管理',
    description: (
      <>
        Obsidian 风格 Markdown 编辑器，支持实时预览、标签分类、笔记导出，高效整理知识。
      </>
    ),
  },
  {
    icon: '📥',
    title: '碎片采集',
    description: (
      <>
        支持微信公众号、小红书、B 站、YouTube 多平台导入，后台任务队列异步处理。
      </>
    ),
  },
  {
    icon: '🕸️',
    title: '知识图谱',
    description: (
      <>
        Neo4j 存储 + LLM 智能提取概念与关系，2D 力导向图可视化展示知识结构。
      </>
    ),
  },
  {
    icon: '🤖',
    title: 'AI 助手',
    description: (
      <>
        支持 OpenAI / Anthropic / Azure / 阿里云多 LLM 提供商，SSE 流式输出。
      </>
    ),
  },
  {
    icon: '🗺️',
    title: '思维导图',
    description: (
      <>
        独立思维导图页面，树状结构直观展示知识层次关系。
      </>
    ),
  },
  {
    icon: '🔍',
    title: '智能搜索',
    description: (
      <>
        全局搜索能力，快速定位笔记、标签和内容。
      </>
    ),
  },
];

function Feature({icon, title, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>FEATURES</span>
          <Heading as="h2" className={styles.sectionTitle}>核心功能</Heading>
          <p className={styles.sectionDesc}>从碎片化采集到结构化知识的全链路管理</p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

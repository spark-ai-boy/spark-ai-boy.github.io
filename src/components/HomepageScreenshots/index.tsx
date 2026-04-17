import Heading from '@theme/Heading';
import styles from './styles.module.css';

const screenshots = [
  { src: '/img/home_screen.png', title: '首页概览' },
  { src: '/img/knowledge_graph.png', title: '知识图谱' },
  { src: '/img/ai_assistant.png', title: 'AI 助手' },
  { src: '/img/notes.png', title: '笔记编辑' },
  { src: '/img/import.png', title: '内容导入' },
  { src: '/img/tasks.png', title: '后台任务' },
  { src: '/img/setting.png', title: '设置中心' },
];

export default function HomepageScreenshots() {
  return (
    <section className={styles.screenshots}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>PREVIEW</span>
          <Heading as="h2" className={styles.sectionTitle}>功能预览</Heading>
          <p className={styles.sectionDesc}>直观、优雅的知识管理体验</p>
        </div>
        <div className={styles.grid}>
          {screenshots.map((shot, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={shot.src}
                  alt={shot.title}
                  className={styles.image}
                />
              </div>
              <span className={styles.caption}>{shot.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

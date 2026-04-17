import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageArchitecture() {
  return (
    <section className={styles.architecture}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>ARCHITECTURE</span>
          <Heading as="h2" className={styles.sectionTitle}>技术架构</Heading>
          <p className={styles.sectionDesc}>现代化的全栈技术栈，融合 AI 能力</p>
        </div>
        <div className={styles.archDiagram}>
          <div className={styles.archLayer}>
            <div className={styles.archLabel}>前端</div>
            <div className={styles.archTechs}>
              <span className={styles.techTag}>React Native</span>
              <span className={styles.techTag}>Expo SDK 55</span>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>Zustand</span>
            </div>
            <div className={styles.archPlatforms}>
              <span className={styles.platformTag}>Web</span>
              <span className={styles.platformTag}>iOS</span>
              <span className={styles.platformTag}>Android</span>
              <span className={styles.platformTag}>Electron</span>
            </div>
          </div>

          <div className={styles.archArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.archLayer}>
            <div className={styles.archLabel}>后端</div>
            <div className={styles.archTechs}>
              <span className={styles.techTag}>FastAPI</span>
              <span className={styles.techTag}>Python 3.11</span>
              <span className={styles.techTag}>SQLAlchemy 2.0</span>
              <span className={styles.techTag}>Pydantic v2</span>
              <span className={styles.techTag}>OAuth2 + JWT</span>
            </div>
          </div>

          <div className={styles.archArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.dbRow}>
            <div className={styles.dbLayer}>
              <div className={styles.dbIcon}>🐘</div>
              <div className={styles.dbLabel}>PostgreSQL</div>
              <div className={styles.dbDesc}>关系数据</div>
            </div>
            <div className={styles.dbLayer}>
              <div className={styles.dbIcon}>⚡</div>
              <div className={styles.dbLabel}>Redis</div>
              <div className={styles.dbDesc}>缓存 + 队列</div>
            </div>
            <div className={styles.dbLayer}>
              <div className={styles.dbIcon}>🕸️</div>
              <div className={styles.dbLabel}>Neo4j</div>
              <div className={styles.dbDesc}>知识图谱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

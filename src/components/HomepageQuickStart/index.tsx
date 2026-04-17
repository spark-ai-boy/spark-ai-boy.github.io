import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

const steps = [
  {
    title: '配置环境变量',
    desc: '复制并编辑环境变量模板',
    code: `cp docker/.env.example docker/.env.production`,
  },
  {
    title: '启动服务',
    desc: '一键启动所有服务和基础设施',
    code: `./docker/deploy.sh start`,
  },
  {
    title: '访问应用',
    desc: '浏览器打开即可开始使用',
    code: `# 前端: http://your-server-ip\n# API:  http://your-server-ip:8000\n# Swagger: http://your-server-ip:8000/docs`,
  },
];

export default function HomepageQuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>QUICK START</span>
          <Heading as="h2" className={styles.sectionTitle}>快速开始</Heading>
          <p className={styles.sectionDesc}>三步即可启动完整服务</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <Heading as="h3" className={styles.stepTitle}>{step.title}</Heading>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
              <div className={styles.stepCode}>
                <CodeBlock language="bash">{step.code}</CodeBlock>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

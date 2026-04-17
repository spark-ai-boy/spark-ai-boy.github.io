import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageQuickStart from '@site/src/components/HomepageQuickStart';
import HomepageArchitecture from '@site/src/components/HomepageArchitecture';
import HomepageScreenshots from '@site/src/components/HomepageScreenshots';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg} />
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroBadge}>
          {'\u5f00\u6e90'} &middot; {'\u514d\u8d39'} &middot; {'\u4e00\u952e\u90e8\u7f72'}
          <span className={styles.heroBadgeDivider}></span>
          <span className={styles.heroBadgeArrow}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <p className={styles.heroDesc}>
          {'\u878d\u5408\u5927\u6a21\u578b\u667a\u80fd\u603b\u7ed3\u3001\u77e5\u8bc6\u56fe\u8c31\u53ef\u89c6\u5316\u548c\u591a\u5e73\u53f0\u5185\u5bb9\u91c7\u96c6\u80fd\u529b'}<br />
          {'\u4ece\u788e\u7247\u5316\u4fe1\u606f\u4e2d\u6784\u5efa\u7ed3\u6784\u5316\u77e5\u8bc6\u4f53\u7cfb'}
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={styles.btnPrimary}
            to="/docs/intro">
            {'\u5feb\u901f\u5f00\u59cb'}
          </Link>
          <Link
            className={styles.btnSecondary}
            href="https://github.com/spark-ai-boy/SparkNoteAI">
            GitHub
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6+</span>
            <span className={styles.statLabel}>{'\u6838\u5fc3\u529f\u80fd'}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>LLM {'\u63d0\u4f9b\u5546'}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1 min</span>
            <span className={styles.statLabel}>{'\u5b8c\u6210\u90e8\u7f72'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="SparkNoteAI \u2014 {'\u77e5\u8bed\u62fe\u5149'}\uff0c{'\u77e5\u8bc6\u6574\u7406\u4e0e\u7ba1\u7406\u7cfb\u7edf'}">
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <HomepageArchitecture />
        <HomepageScreenshots />
        <HomepageQuickStart />
      </main>
    </Layout>
  );
}

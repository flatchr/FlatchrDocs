import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to='https://www.flatchr.io/' style={{margin: 1 + '%', width:12 + "em"}} >
            Découvrir Flatchr
          </Link>
          <Link
            className="button button--info button--lg"
            to='https://app.flatchr.io/' style={{margin: 1 + '%', width:12 + "em"}}>
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Retrouvez la documentation technique de l'ATS flatchr.io">
      <link href="//db.onlinewebfonts.com/c/5ab304ade0d4f62d027d12464ca69443?family=Apple+Color+Emoji" rel="stylesheet" type="text/css"/>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

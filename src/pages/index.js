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
    <header className={clsx('hero shadow--tl"', styles.heroBannerLight)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to='https://app.flatchr.io/' style={{margin: 1 + '%', width:12 + "em"}} >
            Se connecter
          </Link>
          <Link
            className="button button--primary button--lg"
            to='https://www.flatchr.io/' style={{margin: 1 + '%', width:12 + "em"}}>
            Découvrir Flatchr
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepagePartner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark shadow--tl"', styles.heroBannerPartner)}>
      <div className="container">
        <p className="hero__subtitle" style={{'font-size':1.2 +'em',marginBottom:0 +'px'}}>Vous souhaitez vous intégrer avec Flatchr et apparaître dans notre <a href='https://www.flatchr.io/marketplace'>Marketplace </a> ?  <Link
            className="button button--outline button--primary button--lg"
            to='/Partnership' style={{margin: 1 + '%', width:12 + "em",padding:'O.5' +"em"}}>
            Devenir Partenaire
          </Link></p>

          
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepagePartner />
    </Layout>
  );
}

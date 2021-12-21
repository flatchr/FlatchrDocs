import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Intégrez',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        votre site carrière Flatchr sur votre site internet ou intranet grâce à notre Iframe.
      </>
    ),
  },
  {
    title: 'Connectez',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        vos systèmes à Flatchr grâce à notre API REST. 
      </>
    ),
  },
  {
    title: 'Synchronisez',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        vos workflows grâce aux Webhooks Flatchr.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

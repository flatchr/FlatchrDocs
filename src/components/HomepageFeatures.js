import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Intégrez',
    emoji : <p className={styles.emoji}>&#x1F4BB;</p> ,
    Svg: require('../../static/img/High_voltage.svg').default,
    png : require('../../static/img/laptop.png').default,
    description: (
      <>
        votre site carrière Flatchr sur votre site internet ou intranet grâce à notre Iframe.
      </>
    ),
  },
  {
    title: 'Connectez',
    emoji : <p className={styles.emoji}>&#x1F680;</p> ,
    png : require('../../static/img/rocket.png').default,
    Svg: require('../../static/img/Rocket.svg').default,
    description: (
      <>
        vos systèmes à Flatchr grâce à notre API REST. 
      </>
    ),
  },
  {
    title: 'Synchronisez',
    emoji : <p className={styles.emoji}>&#x1F4EC;</p> ,
    png : require('../../static/img/open_mailbox.png').default,
    Svg: require('../../static/img/High_voltage.svg').default,
    description: (
      <>
        vos workflows grâce aux Webhooks Flatchr.
      </>
    ),
  },
];

function Feature({Svg, title, description, emoji,png}) {
  return (
    <div className={clsx('col col--4')}  style={{marginTop: 1 + 'em'}}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <img src={png} style={{'max-width':50 +"%"}}/>
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

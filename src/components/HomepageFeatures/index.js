import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Face Tracking',
    Svg: require('@site/static/img/Chipori.svg').default,
    description: (
      <>
        This page is mostly about Face Tracking work! Walkthroughs, tutorials, and all troubleshooting needs will be addressed here.
      </>
    ),
  },
  {
    title: 'Avatar Assets',
    Svg: require('@site/static/img/Crystal.svg').default,
    description: (
      <>
        For non-FT users, I have a selection of funky trinkets and doodads to accesorize your avatar!
      </>
    ),
  },
  {
    title: 'World and Public Updates',
    Svg: require('@site/static/img/Heart.svg').default,
    description: (
      <>
        A changelog will be regularly updated here with changes to my world, and any public avatars I release!
      </>
    ),
  },
];

function Feature({Svg, Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Image && <img src={Image} alt={title} className={clsx(styles.featureImage, scale && styles.customScale)} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

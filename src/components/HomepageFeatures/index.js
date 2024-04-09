import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Face Tracking',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This page is mostly about Face Tracking work! Walkthroughs, tutorials, and all troubleshooting needs will be addressed here.
      </>
    ),
  },
  {
    title: 'Avatar Assets',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        For non-FT users, I have a selection of funky trinkets and doodads to accesorize your avatar!
      </>
    ),
  },
  {
    title: 'World and Public Updates',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A changelog will be regularly updated here with chanes to my world, and any public avatars I release!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API Development',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas sed leo tempor arcu volutpat gravida vitae sit amet tellus.
        Suspendisse viverra sem nec libero vestibulum, mattis feugiat augue hendrerit.
        Duis a pretium elit, nec luctus leo.
      </>
    ),
  },
  {
    title: 'Network Programming',
    description: (
      <>
        Curabitur lobortis, elit eu consequat vulputate, lacus nisi dapibus ex, sed cursus metus leo id mi.
        Duis tortor augue, consequat in laoreet in, mattis in enim. Nam congue dolor ut mollis euismod.
        Nam vestibulum diam sapien, vitae porta eros sodales ut.
      </>
    ),
  },
  {
    title: 'Distributed Systems',
    description: (
      <>
        Etiam nec eros eget arcu consequat iaculis sed eget tellus.
        In lobortis enim nec metus tristique, vel posuere nibh fermentum.
        Quisque eget neque luctus, volutpat urna vitae, porttitor dui.
        Pellentesque blandit odio elit. Nullam sed accumsan elit.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

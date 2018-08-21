import React from 'react';
import styles from '../../styles/main.less';

const Footer = () => {
  return (
    <div>
      <section className={styles.share}>
        <div className={styles['share-wrap']}>
          <a
            className={styles['share-icon']}
            href="https://twitter.com/alfonzmillions"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            className={styles['share-icon']}
            href="https://twitter.com/alfonzmillions"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            className={styles['share-icon']}
            href="https://twitter.com/alfonzmillions"
          >
            <i className="fa fa-envelope" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;

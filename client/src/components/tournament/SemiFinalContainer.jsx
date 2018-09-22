import React, { Fragment } from 'react';
import styles from '../../styles/main.less';

const SemiFinalContainer = ({ children }) => {
  return (
    <div className={`${styles.round} ${styles['round-three']}`}>
      <div className={styles['round-details']}>
        Semi Finals<br />
        <span className={styles.date}>March 22</span>
      </div>
      {children}
    </div>
  );
};

export default SemiFinalContainer;

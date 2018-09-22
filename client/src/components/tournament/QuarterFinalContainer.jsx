import React, { Fragment } from 'react';
import styles from '../../styles/main.less';

const QuarterFinalContainer = ({ children }) => {
  return (
    <div className={`${styles.round} ${styles['round-two']}`}>
      <div className={styles['round-details']}>
        Quarter Finals<br />
        <span className={styles.date}>March 18</span>
      </div>
      {children}
    </div>
  );
};

export default QuarterFinalContainer;

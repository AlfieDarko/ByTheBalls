import React, { Fragment } from 'react';
import styles from '../../styles/main.less';

const FinalContainer = ({ children }) => {
  return (
    <div className={styles.final}>
      <i className="fa fa-trophy" />
      <div className={styles['round-details']}>
        Championship Finals <br />
        <span className={styles.date}>March 30 - Apr. 1</span>
      </div>
      {children}
    </div>
  );
};

export default FinalContainer;

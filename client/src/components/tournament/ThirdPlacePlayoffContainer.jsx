import React from 'react';
import styles from '../../styles/main.less';

const ThirdPlacePlayoffContainer = ({ children }) => {
  return (
    <div className={styles['semis-l']}>
      <div className={styles['round-details']}>
        3rd Place Playoff <br />
        <span className={styles.date}>March 26-28</span>
      </div>
      {children}
    </div>
  );
};

export default ThirdPlacePlayoffContainer;

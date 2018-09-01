import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/main.less';

const Matchup = ({ playerA, playerB, winner }) => (
  <Fragment>
    <ul className={styles.matchup}>
      <li className={`${styles.team} ${styles['team-top']}`}>
        {playerA}
        <span className={styles.score}>score 00</span>
      </li>
      <li className={`${styles.team} ${styles['team-bottom']}`}>
        {playerB}
        <span className={styles.score}>score 00</span>
      </li>
    </ul>
  </Fragment>
);

Matchup.propTypes = {
  playerA: PropTypes.string.isRequired,
  playerB: PropTypes.string.isRequired,
};

export default Matchup;

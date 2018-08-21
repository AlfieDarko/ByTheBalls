import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/main.less';

const ChampionshipMatchup = ({ playerA, playerB }) => (
  <Fragment>
    <ul className={`${styles.matchup} ${styles.championship}`}>
      <li className={`${styles.team} ${styles['team-top']}`}>
        {playerA}
        <span className={styles['vote-count']}>&nbsp;</span>
      </li>
      <li className={`${styles.team} ${styles['team-bottom']}`}>
        {playerB}
        <span className={styles['vote-count']}>&nbsp;</span>
      </li>
    </ul>
  </Fragment>
);

ChampionshipMatchup.propTypes = {
  playerA: PropTypes.string.isRequired,
  playerB: PropTypes.string.isRequired,
};
export default ChampionshipMatchup;

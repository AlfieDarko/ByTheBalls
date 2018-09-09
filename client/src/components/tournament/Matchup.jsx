import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/main.less';

const Matchup = ({
  playerA,
  playerB,
  playerAPoints,
  playerBPoints,
  addToScore,
}) => {
  if (playerA && playerB) {
    return (
      <Fragment>
        <ul className={styles.matchup}>
          <li className={`${styles.team} ${styles['team-top']}`} id={playerA}>
            {playerA}
            <span className={styles.score}>
              <FontAwesomeIcon id={playerA} icon={faMinusSquare} />{' '}
              <FontAwesomeIcon
                id={playerA}
                icon={faPlusSquare}
                onClick={event => addToScore(event)}
              />
              {'   '}
              {playerAPoints}
            </span>{' '}
          </li>

          <li
            className={`${styles.team} ${styles['team-bottom']}`}
            id={playerB}
          >
            {playerB}
            <span className={styles.score}>
              <FontAwesomeIcon id={playerB} icon={faMinusSquare} />{' '}
              <FontAwesomeIcon
                id={playerB}
                icon={faPlusSquare}
                onClick={event => addToScore(event)}
              />
              {'   '}
              {playerBPoints}
            </span>
          </li>
        </ul>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ul className={styles.matchup}>
          <li className={`${styles.team} ${styles['team-top']}`}>
            Loading...
            <span className={styles.score}>score 00</span>
          </li>
          <li className={`${styles.team} ${styles['team-bottom']}`}>
            Loading ..
            <span className={styles.score}>score 00</span>
          </li>
        </ul>
      </Fragment>
    );
  }
};

Matchup.propTypes = {
  playerA: PropTypes.string.isRequired,
  playerB: PropTypes.string.isRequired,
};

export default Matchup;

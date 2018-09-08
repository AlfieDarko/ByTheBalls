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
              <FontAwesomeIcon icon={faMinusSquare} />{' '}
              <FontAwesomeIcon
                icon={faPlusSquare}
                onDoubleClick={event => addToScore(event)}
              />
              {'   '}
              {playerAPoints}
            </span>{' '}
          </li>

          <li
            className={`${styles.team} ${styles['team-bottom']}`}
            id={playerB}
            // onDoubleClick={addToScore(playerAid)}
          >
            {playerB}
            <span className={styles.score}>
              <FontAwesomeIcon icon={faMinusSquare} />{' '}
              <FontAwesomeIcon icon={faPlusSquare} />
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

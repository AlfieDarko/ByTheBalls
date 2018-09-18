import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import IconWrapper from './IconWrapper';

import styles from '../../styles/main.less';

const Matchup = ({
  playerA,
  playerAid,
  playerB,
  playerBid,
  playerAPoints,
  playerBPoints,
  handleAddToScoreClick,
  handleToggle,
}) => {
  if (playerA && playerB) {
    return (
      <Fragment>
        <ul className={styles.matchup}>
          <li className={`${styles.team} ${styles['team-top']}`} id={playerA}>
            <input
              type="radio"
              name={`${playerAid}vs${playerBid}`}
              player={playerA}
              playerid={playerAid}
              opponent={playerB}
              opponentid={playerBid}
              onChange={event => handleToggle(event)}
            />
            {playerA}
            <span className={styles.score}>
              <IconWrapper
                id={playerAid}
                name={playerA}
                amount={-1}
                iconName="minus"
                onClick={event => handleAddToScoreClick(event)}
              />
              {'     '}
              <IconWrapper
                id={playerAid}
                name={playerA}
                amount={1}
                iconName="plus"
                onClick={event => handleAddToScoreClick(event)}
              />
              {'   '}
              {playerAPoints}
            </span>{' '}
          </li>

          <li
            className={`${styles.team} ${styles['team-bottom']}`}
            id={playerB}
          >
            <input
              type="radio"
              name={`${playerAid}vs${playerBid}`}
              player={playerB}
              playerid={playerBid}
              opponent={playerA}
              opponentid={playerAid}
              onChange={event => handleToggle(event)}
            />
            {playerB}

            <span className={styles.score}>
              <IconWrapper
                id={playerBid}
                name={playerB}
                iconName="minus"
                amount={-1}
                onClick={event => handleAddToScoreClick(event)}
              />{' '}
              <IconWrapper
                name={playerB}
                id={playerBid}
                iconName="plus"
                amount={1}
                onClick={event => handleAddToScoreClick(event)}
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

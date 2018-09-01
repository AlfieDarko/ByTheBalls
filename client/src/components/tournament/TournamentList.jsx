import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TournamentItem from './TournamentItem';
import styles from '../../styles/main.less';

const TournamentList = ({ tournaments }) => {
  return (
    <div id={styles.bracket}>
      <div className={styles.container}>
        <div className={styles['form-div']}>
          <table>
            <thead />
            <tbody>
              {console.log(tournaments, 'ooo')}
              {tournaments.map(tournament => (
                <TournamentItem key={tournament._id} tournament={tournament} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TournamentList;

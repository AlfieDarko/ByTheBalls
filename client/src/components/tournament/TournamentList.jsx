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
              {console.log(
                Object.values(tournaments),
                'Object.values(tournaments)',
              )}
              {Object.values(tournaments).map(tournament => {
                console.log(tournament, 'lERT');
                return <TournamentItem tournament={[tournament]} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TournamentList;

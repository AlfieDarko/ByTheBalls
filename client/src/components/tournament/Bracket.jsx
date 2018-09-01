import React, { Fragment } from 'react';
import _ from 'lodash';
// import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';

// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';

// Components
import Matchup from './Matchup';
import ChampionshipMatchup from './ChampionshipMatchup';
import styles from '../../styles/main.less';

WebFont.load({
  google: {
    families: [
      'Istok Web',
      'sans-serif',
      'Holtwood One SC',
      'Abel',
      'Roboto Condensed',
    ],
  },
});

let roundOneDiv = `${styles.round} ${styles['round-one']} ${styles.current}`;
// use styles.current to highlight what round we are on
// on or off via props maybe?
class Bracket extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tournament: Object.assign({}, this.props.tournament),
    };
  }

  componentWillMount() {
    this.props.actions.loadOneTournament(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'sweetone');
    this.setState({
      tournament: Object.assign({}, nextProps.tournament),
      players: nextProps.tournament.players,
    });
  }

  render() {
    const { tournament } = this.props;

    return (
      <Fragment>
        {console.log(this.props.players, 'plyers')}
        <section id={styles.bracket}>
          <div className={styles.container}>
            <div className={`${styles.split} ${styles['split-one']}`}>
              <div className={roundOneDiv}>
                <div className={styles['round-details']}>
                  Sweet 16<br />
                  <span className={styles.date}>March 16</span>
                </div>
                <Matchup playerA="" playerB="Drake" />
                <Matchup playerA="MJ" playerB="Drake" />
                <Matchup playerA="MJ" playerB="Drake" />
                <Matchup playerA="MJ" playerB="Drake" />
              </div>
              {/* <!-- END ROUND ONE --> */}

              <div className={`${styles.round} ${styles['round-two']}`}>
                <div className={styles['round-details']}>
                  Quarter Finals<br />
                  <span className={styles.date}>March 18</span>
                </div>
                <Matchup playerA="MJ" playerB="Drake" />
                <Matchup playerA="MJ" playerB="Drake" />
              </div>
              {/* <!-- END ROUND TWO --> */}
              <div className={`${styles.round} ${styles['round-three']}`}>
                <div className={styles['round-details']}>
                  Semi Finals<br />
                  <span className={styles.date}>March 22</span>
                </div>
                <Matchup playerA="MJ" playerB="Drake" />
              </div>
              {/* <!-- END ROUND THREE -->		 */}
            </div>
            <div className={styles.champion}>
              <div className={styles['semis-l']}>
                <div className={styles['round-details']}>
                  3rd Place Playoff <br />
                  <span className={styles.date}>March 26-28</span>
                </div>
                <ChampionshipMatchup playerA="Undecided" playerB="Undecided" />{' '}
              </div>
              <div className={styles.final}>
                <i className="fa fa-trophy" />
                <div className={styles['round-details']}>
                  Championship Finals <br />
                  <span className={styles.date}>March 30 - Apr. 1</span>
                </div>

                <ChampionshipMatchup playerA="Undecided" playerB="Undecided" />
              </div>
              <div className={styles['semis-r']}>
                <div className={styles['round-details']}>
                  {' '}
                  <br />
                </div>
              </div>
            </div>

            <div className={`${styles.split} ${styles['split-two']}`}>
              <div className={`${styles.round} ${styles['round-three']}`}>
                <div className={styles['round-details']}>
                  Semi Finals<br />
                  <span className={styles.date}>March 22</span>
                </div>
                <Matchup playerA="MJ" playerB="Drake" />
              </div>
              {/* <!-- END ROUND THREE -->	 */}

              <div className={`${styles.round} ${styles['round-two']}`}>
                <div className={styles['round-details']}>
                  Quarter Finals<br />
                  <span className={styles.date}>March 18</span>
                </div>
                <Matchup playerA="MJ" playerB="Drake" />

                <Matchup playerA="MJ" playerB="Drake" />
              </div>
              {/* <!-- END ROUND TWO --> */}
              <div
                className={`${styles.round} ${styles['round-one']} ${
                  styles.current
                }`}
              >
                <div className={styles['round-details']}>
                  Sweet 16<br />
                  <span className={styles.date}>March 16</span>
                </div>
                <Matchup playerI="MJ" playerJ="Drake" />
                <Matchup playerK="MJ" playerL="Drake" />
                <Matchup playerM="MJ" playerN="Drake" />
                <Matchup playerO="MJ" playerP="Drake" />
              </div>
              {/* <!-- END ROUND ONE -->*/}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tournament: state.tournament,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bracket);

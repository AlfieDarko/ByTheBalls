import React, { Fragment } from 'react';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';

// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import * as playerActions from '../../actions/playerActions';

// Components
import Matchup from './Matchup';
import ChampionshipMatchup from './ChampionshipMatchup';
import styles from '../../styles/main.less';
import { selectTournamentById } from '../../reducers/tournamentReducer';

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
    this.handleAddToScoreClick = this.handleAddToScoreClick.bind(this);

    this.state = {};
  }

  handleAddToScoreClick(event) {
    console.log('my name is:', event.target.id);
    this.props.playerActions.addToScore(event.target.id);
  }

  render() {
    const { tournament } = this.props;
    return (
      <Fragment>
        {console.log(this.props)}
        <section id={styles.bracket}>
          <div className={styles.container}>
            <div className={`${styles.split} ${styles['split-one']}`}>
              <div className={roundOneDiv}>
                <div className={styles['round-details']}>
                  Sweet 16<br />
                  <span className={styles.date}>March 16</span>
                </div>
                {console.log()}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerA.name}
                    playerAPoints={tournament.players.playerA.firstMatchPoints}
                    playerB={tournament.players.playerB.name}
                    playerBPoints={tournament.players.playerB.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerC.name}
                    playerAPoints={tournament.players.playerC.firstMatchPoints}
                    playerB={tournament.players.playerD.name}
                    playerBPoints={tournament.players.playerD.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerE.name}
                    playerAPoints={tournament.players.playerE.firstMatchPoints}
                    playerB={tournament.players.playerF.name}
                    playerBPoints={tournament.players.playerF.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerG.name}
                    playerAPoints={tournament.players.playerG.firstMatchPoints}
                    playerB={tournament.players.playerH.name}
                    playerBPoints={tournament.players.playerH.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
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
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerI.name}
                    playerAPoints={tournament.players.playerI.firstMatchPoints}
                    playerB={tournament.players.playerJ.name}
                    playerBPoints={tournament.players.playerJ.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerK.name}
                    playerAPoints={tournament.players.playerK.firstMatchPoints}
                    playerB={tournament.players.playerL.name}
                    playerBPoints={tournament.players.playerL.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerM.name}
                    playerAPoints={tournament.players.playerM.firstMatchPoints}
                    playerB={tournament.players.playerN.name}
                    playerBPoints={tournament.players.playerN.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerO.name}
                    playerAPoints={tournament.players.playerO.firstMatchPoints}
                    playerB={tournament.players.playerP.name}
                    playerBPoints={tournament.players.playerP.firstMatchPoints}
                    addToScore={e => this.handleAddToScoreClick(e)}
                    // addToScore={addToScore}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
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
  let ownPropsId = ownProps.match.params.id;
  let tournament = selectTournamentById(state, ownPropsId);

  return {
    tournaments: state.tournaments,
    state: state,
    tournament: tournament,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch),
    playerActions: bindActionCreators(playerActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bracket);

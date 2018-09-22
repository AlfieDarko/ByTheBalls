import React, { Fragment } from 'react';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';

// Redux stuff
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import * as playerActions from '../../actions/playerActions';
import { selectTournamentById } from '../../reducers/tournamentReducer';

// styles
import styles from '../../styles/main.less';

// Components
import Matchup from './Matchup';
import ChampionshipMatchup from './ChampionshipMatchup';
import QuarterFinalContainer from './QuarterFinalContainer';
import SemiFinalContainer from './SemiFinalContainer';
import FinalContainer from './FinalContainer';
import ThirdPlacePlayoffContainer from './ThirdPlacePlayoffContainer';

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

// Constants

/*
  quarter finals logic
  Takes winner from corresponding Match




*/

let roundOneDiv = `${styles.round} ${styles['round-one']} ${styles.current}`;
// use styles.current to highlight what round we are on
// on or off via props maybe?
class Bracket extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleAddToScoreClick = this.handleAddToScoreClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    // this.state = {};
  }

  handleToggle(event) {
    let { tournament, playerActions } = this.props;
    let { getAttribute } = event.target;

    let playerID = getAttribute('playerid');
    let playerName = getAttribute('player');
    let opponentID = getAttribute('opponentid');
    let opponentName = getAttribute('opponent');

    playerActions.setFirstMatchStatus(
      playerID,
      playerName,
      opponentID,
      opponentName,
      tournament,
    );
  }

  handleAddToScoreClick(event) {
    let { id } = event.target;
    let { playerActions, tournament } = this.props;

    if (id) {
      playerActions.updateFirstMatchScore(
        event.currentTarget.id,
        event.target.getAttribute('name'),
        event.target.getAttribute('amount'),
        tournament,
      );
    }
  }

  render() {
    const { tournament } = this.props;
    return (
      <Fragment>
        <section id={styles.bracket}>
          <div className={styles.container}>
            <div className={`${styles.split} ${styles['split-one']}`}>
              <div className={roundOneDiv}>
                <div className={styles['round-details']}>
                  Sweet 16<br />
                  <span className={styles.date}>March 16</span>
                </div>

                {tournament ? (
                  <Matchup
                    // move strings to constants after
                    matchStage="firstMatch"
                    playerA={tournament.players.playerA.name}
                    playerAid={tournament.players.playerA.id}
                    playerAPoints={tournament.players.playerA.firstMatchPoints}
                    playerB={tournament.players.playerB.name}
                    playerBid={tournament.players.playerB.id}
                    playerBPoints={tournament.players.playerB.firstMatchPoints}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerC.name}
                    playerAid={tournament.players.playerC.id}
                    playerAPoints={tournament.players.playerC.firstMatchPoints}
                    playerB={tournament.players.playerD.name}
                    playerBid={tournament.players.playerD.id}
                    playerBPoints={tournament.players.playerD.firstMatchPoints}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerE.name}
                    playerAid={tournament.players.playerE.id}
                    playerAPoints={tournament.players.playerE.firstMatchPoints}
                    playerB={tournament.players.playerF.name}
                    playerBid={tournament.players.playerF.id}
                    playerBPoints={tournament.players.playerF.firstMatchPoints}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}

                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerG.name}
                    playerAid={tournament.players.playerG.id}
                    playerAPoints={tournament.players.playerG.firstMatchPoints}
                    playerB={tournament.players.playerH.name}
                    playerBid={tournament.players.playerH.id}
                    playerBPoints={tournament.players.playerH.firstMatchPoints}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
              </div>
              {/* <!-- END ROUND ONE --> */}
              <QuarterFinalContainer>
                <Matchup playerA="Undecided" playerB="Undecided" />
                <Matchup playerA="Undecided" playerB="Undecided" />
              </QuarterFinalContainer>
              {/* <!-- END ROUND TWO --> */}
              <SemiFinalContainer>
                <Matchup playerA="Undecided" playerB="Undecided" />
              </SemiFinalContainer>
              {/* <!-- END ROUND THREE -->		 */}
            </div>
            <div className={styles.champion}>
              <ThirdPlacePlayoffContainer>
                <ChampionshipMatchup playerA="Undecided" playerB="Undecided" />
              </ThirdPlacePlayoffContainer>

              <FinalContainer>
                <ChampionshipMatchup playerA="Undecided" playerB="Undecided" />
              </FinalContainer>
              <div className={styles['semis-r']}>
                <div className={styles['round-details']}>
                  {' '}
                  <br />
                </div>
              </div>
            </div>

            <div className={`${styles.split} ${styles['split-two']}`}>
              <SemiFinalContainer>
                <Matchup playerA="Undecided" playerB="Undecided" />
              </SemiFinalContainer>
              {/* <!-- END ROUND THREE -->	 */}
              <QuarterFinalContainer>
                <Matchup playerA="Undecided" playerB="Undecided" />

                <Matchup playerA="Undecided" playerB="Undecided" />
              </QuarterFinalContainer>
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
                    playerAid={tournament.players.playerI.id}
                    playerAPoints={tournament.players.playerI.firstMatchPoints}
                    playerB={tournament.players.playerJ.name}
                    playerBPoints={tournament.players.playerJ.firstMatchPoints}
                    playerBid={tournament.players.playerJ.id}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerK.name}
                    playerAPoints={tournament.players.playerK.firstMatchPoints}
                    playerAid={tournament.players.playerK.id}
                    playerB={tournament.players.playerL.name}
                    playerBPoints={tournament.players.playerL.firstMatchPoints}
                    playerBid={tournament.players.playerL.id}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerM.name}
                    playerAPoints={tournament.players.playerM.firstMatchPoints}
                    playerAid={tournament.players.playerM.id}
                    playerB={tournament.players.playerN.name}
                    playerBPoints={tournament.players.playerN.firstMatchPoints}
                    playerBid={tournament.players.playerN.id}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
                  />
                ) : (
                  <Matchup playerA="" playerB="" />
                )}
                {tournament ? (
                  <Matchup
                    playerA={tournament.players.playerO.name}
                    playerAPoints={tournament.players.playerO.firstMatchPoints}
                    playerAid={tournament.players.playerO.id}
                    playerB={tournament.players.playerP.name}
                    playerBPoints={tournament.players.playerP.firstMatchPoints}
                    playerBid={tournament.players.playerP.id}
                    handleAddToScoreClick={this.handleAddToScoreClick}
                    handleToggle={this.handleToggle}
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
  // console.log(state);
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

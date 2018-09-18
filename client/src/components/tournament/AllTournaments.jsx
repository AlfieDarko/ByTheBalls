import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as tournamentActions from '../../actions/tournamentActions';
import TournamentList from './TournamentList';

class AllTournaments extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTournament = this.redirectToAddTournament.bind(this);
  }

  tournamentRow(tournament, index) {
    return <div key={index}> {tournament.tournamentName}</div>;
  }

  redirectToAddTournament() {
    const { router } = this.context;
    router.history.push('/new/tournament');
  }

  render() {
    const { tournaments } = this.props;
    {
      console.log(tournaments, 'this.props.tournaments');
    }
    return (
      <div>
        <h1>Tournaments</h1>
        <input
          type="submit"
          value=" Add Tournament"
          onClick={this.redirectToAddTournament}
        />
        {tournaments[0] && <TournamentList tournaments={tournaments} />}
      </div>
    );
  }
}

AllTournaments.contextTypes = {
  router: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  // console.log(state, 'state');
  return {
    tournaments: state.tournaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch),
    // bindActionsCreators go through all the actions in
    // the first param and wrap them in call to dispatch
    // also wrapping actionCreators in a dispatch, so they can dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllTournaments);

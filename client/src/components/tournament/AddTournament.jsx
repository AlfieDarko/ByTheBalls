import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import TournamentForm from './TournamentForm';

class AddTournament extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tournament: Object.assign({}, this.props.tournament),
    };

    this.updateTournamentState = this.updateTournamentState.bind(this);
    this.saveTournament = this.saveTournament.bind(this);
  }

  updateTournamentState(event) {
    const field = event.target.name;
    let tournament = Object.assign({}, this.state.tournament);
    tournament[field] = event.target.value;
    return this.setState({ tournament: tournament });
  }

  saveTournament(event) {
    event.preventDefault();
    this.props.actions.saveTournament(this.state.tournament).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <TournamentForm
        onSave={this.saveTournament}
        onChange={this.updateTournamentState}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  let tournament = {
    tournamentName: '',
    players: [
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
    ],
  };
  return {
    tournament: tournament,
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
)(AddTournament);

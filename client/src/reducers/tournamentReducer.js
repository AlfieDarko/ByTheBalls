import _ from 'lodash';
import { createSelector, defaultMemoize } from 'reselect';
import initialState from './initialState';

export function tournamentsReducer(state = initialState.tournaments, action) {
  switch (action.type) {
    case 'LOAD_TOURNAMENTS_SUCCESS':
      return {
        ...state,
        ...action.tournaments,
      };

    case 'CREATE_TOURNAMENT_SUCCESS':
      return {
        ...state,
        ...action.tournaments,
        isFetching: true,
      };

    default:
      return state;
  }
}

// Selectors

export const selectTournamentById = (state, tournamentid) => {
  return _.find(state.tournaments, { _id: tournamentid });
};

// export const selectPlayersFromTournament = createSelector(
//   selectTournamentById(state, tournamentid),
//   tournament => {
//     console.log(tournament.players);
//     tournament.players;
//   },
// );

export const getPlayers = tournament => {
  const result = tournament.players;
  console.log('result', result);
  return result;
};

// export const selectPlayerByIdFromTournament = createSelector(
//   selectTournamentById,
//   (tournament, playerid) => {
//     return tournament.players.filter(player => player.id == playerid);
//   },
// );

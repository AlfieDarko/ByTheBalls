import initialState from './initialState';

export function tournamentsReducer(state = initialState.tournaments, action) {
  switch (action.type) {
    case 'LOAD_TOURNAMENTS_SUCCESS':
      return action.tournaments;

    case 'CREATE_TOURNAMENT_SUCCESS':
      return [...state, Object.assign({}, action.tournament)];

    default:
      return state;
  }
}

export function tournamentReducer(state = initialState.tournament, action) {
  switch (action.type) {
    case 'LOAD_ONE_TOURNAMENT_SUCCESS':
      return action.tournament;

    default:
      return state;
  }
}

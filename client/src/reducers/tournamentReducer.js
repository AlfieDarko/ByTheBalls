import _ from 'lodash';
import { createSelector, defaultMemoize } from 'reselect';
import initialState from './initialState';
import {
  LOAD_TOURNAMENTS_SUCCESS,
  CREATE_TOURNAMENT_SUCCESS,
  UPDATE_FIRST_MATCH_SCORE,
  SET_FIRST_MATCH_STATUS,
  firstMatchPoints,
} from '../constants/constants';

export function tournamentsReducer(state = initialState.tournaments, action) {
  let newPlayers;
  let newSoloPlayer;
  let tourney;
  let newSoloOpponent;
  switch (action.type) {
    case LOAD_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        ...action.tournaments,
      };

    case CREATE_TOURNAMENT_SUCCESS:
      return {
        ...state,
        ...action.tournaments,
        isFetching: true,
      };

    case UPDATE_FIRST_MATCH_SCORE:
      newPlayers = { ...action.tournament.players };
      newSoloPlayer = { ...newPlayers[action.id] };
      tourney = { ...action.tournament };
      newSoloPlayer[firstMatchPoints] =
        newSoloPlayer[firstMatchPoints] + Number(action.amount);

      newPlayers[action.id] = newSoloPlayer;
      tourney.players = newPlayers;
      return { ...state, 0: { ...tourney } };

    case SET_FIRST_MATCH_STATUS:
      newPlayers = { ...action.tournament.players };
      newSoloPlayer = { ...newPlayers[action.playerID] };
      newSoloOpponent = { ...newPlayers[action.opponentID] };
      newSoloPlayer.wonFirstMatch = true;
      newSoloOpponent.wonFirstMatch = false;
      newPlayers[action.opponentID] = newSoloOpponent;
      newPlayers[action.playerID] = newSoloPlayer;
      tourney = { ...action.tournament };
      tourney.players = newPlayers;

      return { ...state, 0: { ...tourney } };
    default:
      return state;
  }
}

// Selectors
export const selectTournamentById = (state, tournamentid) => {
  return _.find(state.tournaments, { _id: tournamentid });
};

export const getPlayers = tournament => {
  const result = tournament.players;
  return result;
};

import axios from 'axios';

import {
  CREATE_TOURNAMENT_SUCCESS,
  LOAD_TOURNAMENTS_SUCCESS,
  LOAD_ONE_TOURNAMENT_SUCCESS,
  LOAD_PLAYERS_SUCCESS,
  CREATE_TOURNAMENT_REQUEST,
  LOAD_TOURNAMENTS_REQUEST,
} from '../constants/constants';

export function createTournamentSuccess(tournament) {
  return { type: CREATE_TOURNAMENT_SUCCESS, tournament };
}

export function createTournamentRequest(tournament) {
  return { type: CREATE_TOURNAMENT_REQUEST, tournament };
}

export function loadTournamentsSuccess(tournaments) {
  return { type: LOAD_TOURNAMENTS_SUCCESS, tournaments };
}

export function loadTournamentsRequest(tournaments) {
  return { type: LOAD_TOURNAMENTS_REQUEST, tournaments };
}

export function loadOneTournamentSuccess(tournament) {
  return { type: LOAD_ONE_TOURNAMENT_SUCCESS, tournament };
}

export function loadPlayersSuccess(players) {
  return { type: LOAD_PLAYERS_SUCCESS, players };
}

export function loadTournaments() {
  return function(dispatch, getState) {
    return axios
      .get('http://localhost:3000/api/v1/tournaments/')
      .then(tournaments => {
        dispatch(loadTournamentsSuccess({ ...tournaments.data }));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveTournament(tournament) {
  return function(dispatch, getState) {
    return axios
      .post('http://localhost:3000/api/v1/tournaments', {
        tournamentName: tournament.tournamentName,
        players: {
          playerA: { name: tournament.playerA, id: 'playerA' },
          playerB: { name: tournament.playerB, id: 'playerB' },
          playerC: { name: tournament.playerC, id: 'playerC' },
          playerD: { name: tournament.playerD, id: 'playerD' },
          playerE: { name: tournament.playerE, id: 'playerE' },
          playerF: { name: tournament.playerF, id: 'playerF' },
          playerG: { name: tournament.playerG, id: 'playerG' },
          playerH: { name: tournament.playerH, id: 'playerH' },
          playerI: { name: tournament.playerI, id: 'playerI' },
          playerJ: { name: tournament.playerJ, id: 'playerJ' },
          playerK: { name: tournament.playerK, id: 'playerK' },
          playerL: { name: tournament.playerL, id: 'playerL' },
          playerM: { name: tournament.playerM, id: 'playerM' },
          playerN: { name: tournament.playerN, id: 'playerN' },
          playerO: { name: tournament.playerO, id: 'playerO' },
          playerP: { name: tournament.playerP, id: 'playerP' },
        },
      })
      .then(savedTournament => {
        console.log(savedTournament, 'saved');
        dispatch(createTournamentSuccess(savedTournament));
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
}

// the params id is passed to the brackets component via props
// state is done before props
// only way I can do is wait for

import axios from 'axios';

export function createTournamentSuccess(tournament) {
  return { type: 'CREATE_TOURNAMENT_SUCCESS', tournament };
}

export function loadTournamentsSuccess(tournaments) {
  return { type: 'LOAD_TOURNAMENTS_SUCCESS', tournaments };
}

export function loadOneTournamentSuccess(tournament) {
  return { type: 'LOAD_ONE_TOURNAMENT_SUCCESS', tournament };
}

export function loadPlayersSuccess(players) {
  return { type: 'LOAD_PLAYERS_SUCCESS', players };
}

export function loadOneTournament(id) {
  return function(dispatch) {
    return axios
      .get(`http://localhost:3000/api/v1/tournament/${id}`)
      .then(tournament => {
        dispatch(loadOneTournamentSuccess(tournament.data));
        dispatch(loadPlayersSuccess([tournament.data.players]));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadTournaments() {
  return function(dispatch) {
    return axios
      .get('http://localhost:3000/api/v1/tournaments/')
      .then(tournaments => {
        dispatch(loadTournamentsSuccess(tournaments.data));
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
        players: [
          { name: tournament.playerA, id: 'playerA' },
          { name: tournament.playerB, id: 'playerB' },
          { name: tournament.playerC, id: 'playerC' },
          { name: tournament.playerD, id: 'playerD' },
          { name: tournament.playerE, id: 'playerE' },
          { name: tournament.playerF, id: 'playerF' },
          { name: tournament.playerG, id: 'playerG' },
          { name: tournament.playerH, id: 'playerH' },
          { name: tournament.playerI, id: 'playerI' },
          { name: tournament.playerJ, id: 'playerJ' },
          { name: tournament.playerK, id: 'playerK' },
          { name: tournament.playerL, id: 'playerL' },
          { name: tournament.playerM, id: 'playerM' },
          { name: tournament.playerN, id: 'playerN' },
          { name: tournament.playerO, id: 'playerO' },
          { name: tournament.playerP, id: 'playerP' },
        ],
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

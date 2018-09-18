import {
  SET_FIRST_MATCH_STATUS,
  UPDATE_FIRST_MATCH_SCORE,
} from '../constants/constants';

// THIS FILE NEEDS A REFACTOR TO SEPERATE MATCH AND SCORE CONCERNS!!

// MATCH ACTION CREATORS
// export const setFirstMatchSuccess = playerFirstMatchStatus => {
//   return {
//     SET_FIRST_MATCH_SUCCESS,
//     playerFirstMatchStatus,
//   };
// };

// export const setFirstMatch = () => {
//   // we want to take a player and set its wonFirstMatch
//   // attributes to true and false respectively
//   return dispatch => {
//     aplayer.wonFirstMatch = true;
//     dispatch(setFirstMatchSuccess(aplayer));
//   };
// };

// SCORING ACTION CREATORS
export const updateFirstMatchScore = (id, name, amount, tournament) => {
  return { type: UPDATE_FIRST_MATCH_SCORE, id, name, amount, tournament };
};

export const setFirstMatchStatus = (
  playerID,
  name,
  opponentID,
  opponentName,
  tournament,
) => {
  return {
    type: SET_FIRST_MATCH_STATUS,
    playerID,
    name,
    opponentID,
    opponentName,
    tournament,
  };
};

// // selector
// just state!!!!! when you redo this
// export const getPlayerById = (players, playerid) => {
//   console.log(players);
//   return players.filter(player => player._id == playerid);
// };

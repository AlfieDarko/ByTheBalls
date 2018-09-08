const SET_FIRST_MATCH_SUCCESS = 'SET_FIRST_MATCH_SUCCESS';
const ADD_TO_FIRST_MATCH_SCORE_SUCCESS = 'ADD_TO_FIRST_MATCH_SCORE_SUCCESS';
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

// // SCORING ACTION CREATORS
// export const addToFirstMatchScoreSuccess = player => {
//   return { type: ADD_TO_FIRST_MATCH_SCORE_SUCCESS, player };
// };

// export const addToFirstMatchScore = (playerid, tournament) => {
//   console.log(players, 'players now in the action creator');
//   // we want to take our playerid and score and use the selector to
//   // find the player and then we will set the playerScore in the state
//   const player = getPlayerById(players, playerid);

//   const newState = Object.assign([...players]);

//   return dispatch => {
//     console.log(newState, 'newsTATE');
//     // newState[0].firstMatchPoints += 1;
//     // console.log(Object.assign([...players], player), 'ew onne');
//     // const newNewTeam = Object.assign([...players], player);
//     let newplayer = {
//       firstMatchPoints: 1,
//       wonFirstMatch: null,
//       quarterFinalMatchPoints: 0,
//       wonQuarterFinalMatch: null,
//       semiFinalMatchPoints: 0,
//       wonSemiFinalMatch: null,
//       finalMatchPoints: 0,
//       wonFinalMatch: null,
//       _id: '5b8c36c6e709303bd1ea4ee8',
//       name: 'Ryu',
//       id: 'playerA',
//     };
//     dispatch(addToFirstMatchScoreSuccess(newplayer));
//   };
// };

// // selector
// export const getPlayerById = (players, playerid) => {
//   console.log(players);
//   return players.filter(player => player._id == playerid);
// };

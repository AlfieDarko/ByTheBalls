import { combineReducers } from 'redux';
import {
  // tournamentReducer as tournament,
  tournamentsReducer as tournaments,
  // tournamentPointsReducer as tournamentPoints,
} from './tournamentReducer';
// import players from './playersReducer';
// import player from './playerReducer';

const rootReducer = combineReducers({
  tournaments,
  // tournaments,
  // tournamentPoints,
  // players,
  // player,
});

export default rootReducer;

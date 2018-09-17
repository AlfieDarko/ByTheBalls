import { combineReducers } from 'redux';
import { tournamentsReducer as tournaments } from './tournamentReducer';
import playerReducer from './playerReducer';
// import player from './playerReducer';

const rootReducer = combineReducers({
  tournaments,
  // playerReducer,
  // tournamentPoints,
  // players,
  // player,
});

export default rootReducer;

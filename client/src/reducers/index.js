import { combineReducers } from 'redux';
import {
  tournamentReducer as tournament,
  tournamentsReducer as tournaments,
} from './tournamentReducer';

import players from './playersReducer';

const rootReducer = combineReducers({
  tournament,
  tournaments,
  players,
});

export default rootReducer;

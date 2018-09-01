import initialState from './initialState';

export default function playersReducer(state = initialState.players, action) {
  switch (action.type) {
    case 'LOAD_PLAYERS_SUCCESS':
      console.log(action, 'hello');
      return [...state, Object.assign([...state], action.players)];

    default:
      console.log('not here');
      return state;
  }
}

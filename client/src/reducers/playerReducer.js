import initialState from './initialState';

export default function playerReducer(state = initialState.player, action) {
  switch (action.type) {
    case 'SET_FIRST_MATCH_SUCCESS':
      return [...state, Object.assign({}, action.player)];

    default:
      return state;
  }
}

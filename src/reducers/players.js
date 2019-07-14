export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_NUMBER_OF_PLAYERS':
      return {
        ...state,
        players: action.payload,
      };

    default:
      return state;
  }
};

import { UPDATE_SETTINGS } from '../constants';

const initialState = {
  faceUp: false,
  deckId: 'new',
  drawCount: 2,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

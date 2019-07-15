import updateHands from '../helpers/updateHands';
import updateNext from '../helpers/updateNext';
import updateLeader from '../helpers/updateLeader';
import resetGame from '../helpers/resetGame';

import {
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_ERROR,
  DEAL_CARDS_REQUEST,
  DEAL_CARDS_SUCCESS,
  DEAL_CARDS_ERROR,
  ADD_CARD_TO_HAND,
  TOGGLE_STAND,
  COMPARE_HANDS,
  END_GAME,
  DISABLE_PLAYER,
  RESET,
} from '../constants';

const initialState = {
  dealAmount: 2,
  deckId: 'new',
  loaded: false,
  dealer: {
    hand: [],
    next: [],
    score: 0,
    stand: false,
  },
  player: {
    hand: [],
    next: [],
    score: 0,
    stand: false,
  },
  winner: null,
  requesting: false,
  isWaitingForPLayer: false,
  end: false,
  playerStandDisabled: false,
  deckCount: 6,
};

export default (state = initialState, action) => {
  const { dealer, player } = state;
  const { data, payload } = action;

  switch (action.type) {
    case RESET:
      return initialState;

    case FETCH_DECK_REQUEST:
      return {
        ...state,
        requesting: true,
        end: false,
      };

    case DEAL_CARDS_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case FETCH_DECK_SUCCESS:
      return {
        ...state,
        requesting: false,
        remaining: data.remaining,
        deckId: data.deckId,
        isLoaded: true,
      };

    case DEAL_CARDS_SUCCESS:
      return {
        ...state,
        requesting: false,
        ...updateNext({ dealer, player }, data.cards),
        remaining: data.remaining,
        dealAmount: state.dealAmount === 2 ? 1 : 2,
      };

    case FETCH_DECK_ERROR:
    case DEAL_CARDS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case ADD_CARD_TO_HAND:
      return {
        ...state,
        ...updateHands({ dealer, player }, payload),
      };
    case TOGGLE_STAND:
      return {
        ...state,
        player: {
          ...player,
          stand: !player.stand,
        },
      };

    case COMPARE_HANDS:
      return {
        ...state,
        ...updateLeader({ dealer, player }),
      };

    case END_GAME:
      return {
        ...state,
        end: true,
      };

    case DISABLE_PLAYER:
      return {
        ...state,
        playerStandDisabled: true,
      };

    default:
      return state;
  }
};

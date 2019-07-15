import fetchCards from '../helpers/fetch';
import processResponse from '../helpers/processReponse';
import processData from '../helpers/processData';
import {
  ADD_CARD_TO_HAND,
  FETCH_DECK_REQUEST,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_ERROR,
  DEAL_CARDS_REQUEST,
  DEAL_CARDS_SUCCESS,
  DEAL_CARDS_ERROR,
  TOGGLE_STAND,
  COMPARE_HANDS,
  END_GAME,
  DISABLE_PLAYER,
  RESET,
} from '../constants';
import {
  getShouldCompareOnNext,
  getIsStandingByPlayer,
} from '../selectors/cards';
import { reset } from 'ansi-colors';

const getIsDealerStanding = getIsStandingByPlayer('dealer');

export const deal = () => {
  return (dispatch, getState) => {
    const {
      cards: {
        deckId,
        dealer: { stand: dealerStands },
        player: { stand: playerStands },
      },
    } = getState();

    const count = dealerStands ? 1 : 2;

    dispatch({ type: DEAL_CARDS_REQUEST });
    fetchCards({ deckId, count })
      .then(processResponse)
      .then(data => {
        dispatch({
          type: DEAL_CARDS_SUCCESS,
          data: processData(data),
        });
        // permanently disable the player stand toggle
        if (playerStands) {
          dispatch({
            type: DISABLE_PLAYER,
          });
        }
      })
      .catch(error => {
        dispatch({
          type: DEAL_CARDS_ERROR,
          error,
        });
      });
  };
};

export const requestDeck = () => {
  return (dispatch, getState) => {
    dispatch({ type: RESET });
    const {
      cards: { deckId, deckCount },
    } = getState();
    dispatch({ type: FETCH_DECK_REQUEST });
    fetchCards({ deckId, deckCount })
      .then(processResponse)
      .then(data => {
        dispatch({
          type: FETCH_DECK_SUCCESS,
          data: processData(data),
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_DECK_ERROR,
          error,
        });
      });
  };
};

export const addCardToHand = data => {
  return (dispatch, getState) => {
    const { player, id } = data;
    const state = getState();
    const index = state.cards[player].next.findIndex(item => item.id === id);
    const payload = { index, player };
    const shouldCompareHands = getShouldCompareOnNext(state);
    dispatch({
      type: ADD_CARD_TO_HAND,
      payload,
    });

    if (shouldCompareHands) {
      dispatch({
        type: COMPARE_HANDS,
      });
    }
  };
};

export const toggleStand = () => {
  return (dispatch, getState) => {
    const state = getState();
    const isDealerStanding = getIsDealerStanding(state);

    dispatch({
      type: TOGGLE_STAND,
    });

    // if player and dealer both stand, wrap it up
    if (isDealerStanding) {
      dispatch({
        type: END_GAME,
      });
    }
  };
};

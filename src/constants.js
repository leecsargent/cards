export const DECK_ENDPOINT = `https://deckofcardsapi.com/api/deck/`;

// card value constants (for non-numeric)
export const VALUES = {
  ACE: 'ACE',
  JACK: 'JACK',
  KING: 'KING',
  QUEEN: 'QUEEN',
};

// redux actions
export const FETCH_DECK_REQUEST = 'FETCH_DECK_REQUEST';
export const FETCH_DECK_SUCCESS = 'FETCH_DECK_SUCCESS';
export const FETCH_DECK_ERROR = 'FETCH_DECK_ERROR';

export const DEAL_CARDS_REQUEST = 'DEAL_CARDS_REQUEST';
export const DEAL_CARDS_SUCCESS = 'DEAL_CARDS_SUCCESS';
export const DEAL_CARDS_ERROR = 'DEAL_CARDS_ERROR';

export const COMPARE_HANDS = 'COMPARE_HANDS';
export const ADD_CARD_TO_HAND = 'ADD_CARD_TO_HAND';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const TOGGLE_STAND = 'TOGGLE_STAND';

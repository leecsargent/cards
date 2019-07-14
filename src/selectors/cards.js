import { createSelector } from 'reselect';

const cardsState = ({ cards }) => cards;

export const getDealerCards = createSelector(
  cardsState,
  cards => cards.dealer,
);

export const getPlayerCards = createSelector(
  cardsState,
  cards => cards.player,
);

export const getCardsByPlayer = player =>
  createSelector(
    cardsState,
    cards => cards[player],
  );
export const getIsRequesting = createSelector(
  cardsState,
  cards => cards.requesting,
);

export const getDeckId = createSelector(
  cardsState,
  cards => cards.deckId || null,
);

export const getRemaining = createSelector(
  cardsState,
  cards => cards.remaining,
);

export const getIsWaitingForPlayer = createSelector(
  cardsState,
  cards => !!cards.player.next.length || !!cards.dealer.next.length,
);

export const getShouldCompareOnNext = createSelector(
  getCardsByPlayer('player'),
  getCardsByPlayer('dealer'),
  (playerCards, dealerCards) => {
    return (
      [playerCards, dealerCards].filter(item => !!item.next.length).length === 1
    );
  },
);

export const getScoreByPlayer = player =>
  createSelector(
    cardsState,
    cards => cards[player].score,
  );

export const getIsStandingByPlayer = player =>
  createSelector(
    cardsState,
    cards => cards[player].stand,
  );

export const getCardsLoaded = createSelector(
  cardsState,
  cards => !!cards.isLoaded,
);

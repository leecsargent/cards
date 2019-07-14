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

// TODO there is a better way to do this
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

export const getWinner = createSelector(
  cardsState,
  cards => (cards.end ? cards.leader : null),
);

export const getIsPlayerStandDisabled = createSelector(
  cardsState,
  cards => cards.playerStandDisabled,
);

export const getHasEnded = createSelector(
  cardsState,
  cards => cards.end,
);

export const getDeckCount = createSelector(
  cardsState,
  cards => cards.deckCount,
);

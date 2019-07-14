import normalizeCardData from './normalizeCardData';
export default (state, cards) => {
  if (!cards || !cards.length) {
    return state;
  }

  const stands = Object.keys(state).find(item => state[item].stand);

  return {
    dealer:
      stands === 'dealer'
        ? {
            ...state.dealer,
          }
        : {
            ...state.dealer,
            next: [normalizeCardData(cards[0])],
          },
    player:
      stands === 'player'
        ? {
            ...state.player,
          }
        : {
            ...state.player,
            next: [
              normalizeCardData(stands === 'dealer' ? cards[0] : cards[1]),
            ],
          },
  };
};

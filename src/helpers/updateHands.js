import sortCards from './sortCards';
import getHighestAceValue, { value as getSimpleValue } from './getHandValue';

export default (state, data, aceValue) => {
  const { index, player } = data;
  if (state[player].stand) {
    return state;
  }
  const hand = [...state[player].hand, state[player].next[index]].sort(
    sortCards,
  );

  const score =
    aceValue === '11' ? getHighestAceValue(hand) : getSimpleValue(hand);
  const stand = player === 'dealer' && score > 16 ? true : state[player].stand;
  const lost = score > 21;

  return {
    ...state,
    [player]: {
      ...state[player],
      hand,
      next: [
        ...state[player].next.slice(0, index),
        ...state[player].next.slice(index + 1),
      ],
      score,
      lost,
      stand,
    },
  };
};

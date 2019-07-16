export const isAce = card => card.value === 'ACE';

export const isNotAce = card => !isAce(card);

export const nonAces = cards => cards.filter(isNotAce);

export const valueOfNonAces = cards =>
  nonAces(cards).reduce((acc, curr) => {
    return acc + curr.blackjackValue;
  }, 0);

export const highestAceValue = (aces, total = 0) => {
  return Array(aces)
    .fill()
    .reduce(acc => {
      return acc + 11 <= 21 ? acc + 11 : acc + 1;
    }, total);
};

export const getHighestValue = cards =>
  highestAceValue(cards.filter(isAce).length, valueOfNonAces(cards));

export const value = cards =>
  cards.reduce((acc, curr) => {
    return acc + curr.blackjackValue;
  }, 0);

export default getHighestValue;

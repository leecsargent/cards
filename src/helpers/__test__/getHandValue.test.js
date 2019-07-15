import getHandValue from '../getHandValue';

describe('getHandValue helper', () => {
  it('returns the sum of the blackjack values of all cards in a hand', () => {
    expect(getHandValue([{ blackjackValue: 11 }, { blackjackValue: 7 }])).toBe(
      18,
    );
  });
  it('returns 0 for an empty list', () => {
    expect(getHandValue([])).toBe(0);
  });
});

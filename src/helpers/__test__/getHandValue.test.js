import getHandValue, {
  nonAces,
  isAce,
  isNotAce,
  valueOfNonAces,
  highestAceValue,
  getHighestValue,
} from '../getHandValue';

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
describe('nonAces', () => {
  it('returns the cards that are not aces', () => {
    expect(nonAces([{ value: '2' }, { value: 'ACE' }])).toEqual([
      { value: '2' },
    ]);
  });
});

describe('isAce', () => {
  it('returns true if value is ACE', () => {
    expect(isAce({ value: 'ACE' })).toBe(true);
  });
  it('returns false if value not ACE', () => {
    expect(isAce({ value: '2' })).toBe(false);
  });
});

describe('isNotAce', () => {
  it('returns true if value is not ACE', () => {
    expect(isNotAce({ value: '2' })).toBe(true);
  });
  it('returns false if value is ACE', () => {
    expect(isNotAce({ value: 'ACE' })).toBe(false);
  });
});

describe('value of non-aces', () => {
  it('returns sum of blackjack values of non-ace cards', () => {
    expect(
      valueOfNonAces([
        { blackjackValue: 9, value: '9' },
        { blackjackValue: 7, value: '7' },
        { blackjackValue: 11, value: 'ACE' },
      ]),
    ).toBe(16);
  });
});

describe('highestAceValue', () => {
  it('returns the highest possible total given a previous total and a number of Aces', () => {
    expect(highestAceValue(1, 1)).toBe(12);
    expect(highestAceValue(2, 1)).toBe(13);
    expect(highestAceValue(3, 1)).toBe(14);
  });
});

describe('getHighestValue', () => {
  it('returns the highest possible value of a hand of cards', () => {
    expect(
      getHighestValue([
        { blackjackValue: 9, value: '9' },
        { blackjackValue: 7, value: '7' },
        { value: 'ACE' },
      ]),
    ).toBe(17);
    expect(
      getHighestValue([
        { blackjackValue: 2, value: '2' },
        { value: 'ACE' },
        { value: 'ACE' },
      ]),
    ).toBe(14);
    expect(
      getHighestValue([{ value: 'ACE' }, { value: 'ACE' }, { value: 'ACE' }]),
    ).toBe(13);
    expect(getHighestValue([{ blackjackValue: 9, value: '9' }])).toBe(9);
  });
});

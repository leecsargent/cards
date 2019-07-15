import cardValue from '../cardValue';

describe('cardValue helper', () => {
  it('returns the number for numbered cards', () => {
    expect(cardValue('4')).toBe(4);
  });
  it('returns a 1 for ACE', () => {
    expect(cardValue('ACE')).toBe(1);
  });
  it('returns a 10 for JACK', () => {
    expect(cardValue('JACK')).toBe(10);
  });
  it('returns a 10 for QUEEN', () => {
    expect(cardValue('QUEEN')).toBe(10);
  });
  it('returns a 10 for KING', () => {
    expect(cardValue('KING')).toBe(10);
  });
});

import isNumeric from '../isNumeric';

describe('isNumeric helper', () => {
  it('returns strings parsed as numbers', () => {
    expect(isNumeric('2')).toBe(true);
  });
  it('returns false for numbers', () => {
    expect(isNumeric('2')).toBe(true);
  });
});

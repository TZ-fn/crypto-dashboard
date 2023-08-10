import formatCurrency from './formatCurrency';

describe('formatCurrency', () => {
  it('formats the number into USD correctly', () => {
    expect(formatCurrency(12)).toBe('$12.00');

    expect(formatCurrency(12.0001)).toBe('$12.00');

    expect(formatCurrency(12.12)).toBe('$12.12');
  });
});

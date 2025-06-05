const sum = require('./2025-06-05-sum');

describe('sum (reduce)', () => {
  test('[1, 2, 3] → 6', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test('空配列 → 0', () => {
    expect(sum([])).toBe(0);
  });

  test('負数混在 [-1, -2, 3] → 0', () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });
});

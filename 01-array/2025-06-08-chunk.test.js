const chunk = require('./2025-06-08-chunk');

describe('chunk',() => {
    test('配列を size=2 で分割', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      });
    
      test('size が配列長と同じ場合はそのまま 1 要素', () => {
        expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
      });
    
      test('size が配列長より大きい場合は配列全体を 1 要素として返す', () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
      });
});
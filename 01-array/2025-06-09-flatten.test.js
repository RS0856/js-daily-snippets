const flatten = require('./2025-06-09-flatten');

describe('flatten (1‑level only)', () => {
    test('基本ケース: [1,[2,3],[4]] → [1,2,3,4]', () => {
      expect(flatten([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
    });
  
    test('深さ2は残る: [[1],2,[[3]]] → [1,2,[3]]', () => {
      expect(flatten([[1], 2, [[3]]])).toEqual([1, 2, [3]]);
    });
  
    test('空配列 → []', () => {
      expect(flatten([])).toEqual([]);
    });
  
    test('空ネスト要素: [[],[[]]] → [[]]', () => {
      expect(flatten([[], [[]]])).toEqual([[]]);
    });
  
    test('非配列を渡した場合は TypeError', () => {
      expect(() => flatten('not an array')).toThrow(TypeError);
    });
  });
  
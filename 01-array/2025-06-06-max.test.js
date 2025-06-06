const maxItem = require('./2025-06-06-max');

describe('maxItem', () => {
    test('正の数', () => {
        expect(maxItem([1,2,3])).toBe(3);
    });

    test('負の数', () => {
        expect(maxItem([-1,-2,-3])).toBe(-1);
    });

    test('空配列', () => {
        expect(maxItem([])).toBe(-Infinity);
    });
});
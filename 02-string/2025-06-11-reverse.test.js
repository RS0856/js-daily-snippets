const reverse = require('./2025-06-11-reverse');

describe('reverse',() => {
    test('abc', () => {
        expect(reverse('abc')).toBe('cba');
    });

    test('あいう', () => {
        expect(reverse('あいう')).toBe('ういあ');
    });
});
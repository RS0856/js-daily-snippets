const capitalize = require("./2025-06-10-capitalize");

describe('capitalize', () => {
    test('hello',() => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('あいう',() => {
        expect(capitalize('あいう')).toBe('あいう');
    })
});
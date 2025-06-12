const snakeToCamel = require('./2025-06-12-snakeToCamel');

describe('snakeToCamel',() => {
    test('hello_world', () => {
        expect(snakeToCamel('hello_world')).toBe('helloWorld');
    });
    test('snake_to_camel', () => {
        expect(snakeToCamel('snake_to_camel')).toBe('snakeToCamel');
    });
});
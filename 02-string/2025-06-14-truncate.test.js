const truncate = require('./2025-06-14-truncate');

describe('truncate' , () => { 
    test('Hello World',() => {
        expect(truncate('Hello World',8)).toBe('Hello...');
    })
    test('Hi',() => {
        expect(truncate('Hi',5)).toBe('Hi');
    })
})
const unique = require('./2025-06-07-unique');

describe('unique', () => {
    test('配列の中に重複がない場合', () => {
        expect(unique([1,2,3])).toEqual([1,2,3]);
    });

    test('配列の中に重複がある場合', () => {
        expect(unique([1,2,2,3])).toEqual([1,2,3]);
    });
});
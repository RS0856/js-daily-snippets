/**
 * countVowels: 文字列に含まれる母音 (a, e, i, o, u) の個数を数える
 *
 * @param {string} str - 任意の文字列（ASCII 小文字・大文字混在を想定）
 * @returns {number}   - 母音の総出現回数
 *
 * 例:
 *   countVowels('hello')      -> 2   // e, o
 *   countVowels('JAVASCRIPT') -> 3   // A, A, I
 */

const countVowels = str => (str.match(/[aeiou]/gi) || [] ).length;

module.exports = countVowels;
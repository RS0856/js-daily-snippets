/**
 * reverse: 文字列を逆順にして返す
 *
 * @param {string} str - 任意の文字列
 * @returns {string}   - 逆順になった文字列
 *
 * 例:
 *   reverse('abc')   -> 'cba'
 *   reverse('あいう') -> 'ういあ'
 */

const reverse = str => str.split('').reverse().join('');

module.exports = reverse;
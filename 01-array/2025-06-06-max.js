/**
 * max: 数値配列の最大値を返す
 *
 * @param {number[]} arr - 数値の一次元配列
 * @returns {number}     - 配列中の最大値
 *
 * 例:
 *   max([1, 5, 3]) -> 5
 */

const maxItem = arr => Math.max(...arr);

module.exports = maxItem;
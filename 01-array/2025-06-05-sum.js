/**
 * sum: 数値配列の合計を返す
 *
 * @param  {number[]} arr
 * @return {number}
 *
 * 例:
 *   sum([1, 2, 3]) -> 6
 */

const sum = (arr) => {
  return arr.reduce((acc, v) => acc + v, 0);
};

module.exports = sum;

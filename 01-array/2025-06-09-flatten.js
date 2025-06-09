/**
 * flatten (1‑level): 1 階層だけネストを解消する
 *
 * @param {any[]} arr - 任意型要素の一次元 or ネスト1階層配列
 * @returns {any[]}    - 1 階層だけ平坦化された配列（元の順序を保持）
 *
 * 例:
 *   flatten([1, [2, 3], [4]])    -> [1, 2, 3, 4]
 *   flatten([[1], 2, [[3]]])     -> [1, 2, [3]]
 */

const flatten = arr => arr.flat(1);

module.exports = flatten;
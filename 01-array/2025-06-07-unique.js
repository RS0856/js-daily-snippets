/**
 * unique: 配列から重複を除去して新しい配列を返す
 *
 * @param {any[]} arr - 任意型の一次元配列
 * @returns {any[]}    - 重複要素を取り除いた配列（元の順序を保持）
 *
 * 例:
 *   unique([1, 2, 2, 3]) -> [1, 2, 3]
 */

const unique = arr => [...new Set(arr)];

module.exports = unique;
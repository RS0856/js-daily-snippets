/**
 * chunk: 指定サイズごとに配列を分割し、二次元配列を返す
 *
 * @param {any[]}   arr  - 任意型の一次元配列
 * @param {number}  size - 1 以上の整数（チャンクサイズ）
 * @returns {any[][]}    - 分割後の配列（元の順序を保持）
 *
 * 例:
 *   chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
 */

const chunk = (arr,size) => {
    const res = [];
    for (let i = 0; i < arr.length; i+=size) {
        res.push(arr.slice(i,i+size));
    }
    return res;
}

module.exports = chunk;
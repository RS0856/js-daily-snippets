/**
 * truncate: 文字列を指定長で切り詰め、末尾に "..." を付与する
 *
 * @param {string} str  - 任意の文字列
 * @param {number} maxLength - 表示させたい最大文字数（"..." を含む総長）
 * @returns {string}     - 切り詰め後の文字列。必要なければそのまま返す。
 *
 * 例:
 *   truncate('Hello World', 8) -> 'Hello...'
 *   truncate('Hi', 5)          -> 'Hi'
 */

const truncate = (str,maxLength) => {
    if (str.length <= maxLength) {
        return str;
    }

    const ellipsis = '...';
    if (maxLength < ellipsis.length) {
        return str.slice(0,maxLength);
    }

    return str.slice(0,maxLength - ellipsis.length) + ellipsis;
}

module.exports = truncate;
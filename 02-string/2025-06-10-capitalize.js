/**
 * capitalize: 文字列の先頭文字を大文字にし、残りをそのまま返す
 *
 * @param {string} str - 任意の文字列
 * @returns {string}   - 先頭が大文字になった文字列
 *
 * 例:
 *   capitalize('hello')   -> 'Hello'
 *   capitalize('あいう')    -> 'あいう'  // 非アルファベットはそのまま
 */

const capitalize = str => {
  if (str.length === 0) return '';
  // 先頭がアルファベットか判定（正規表現: /^[a-zA-Z]/）
  if (/^[a-zA-Z]/.test(str[0])) {
    return str[0].toUpperCase() + str.slice(1);
  }
  // アルファベット以外はそのまま返す
  return str;
};

module.exports = capitalize;

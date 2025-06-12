/**
 * snakeToCamel: snake_case 文字列を camelCase に変換する
 *
 * @param {string} str - スネークケース（ex: 'my_variable_name'）
 * @returns {string}   - キャメルケース（ex: 'myVariableName'）
 *
 * 例:
 *   snakeToCamel('hello_world')   -> 'helloWorld'
 *   snakeToCamel('snake_to_camel') -> 'snakeToCamel'
 */

const snakeToCamel = str => {
    const parts = str.split('_');
    const head = parts[0];
    const tail = parts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return head + tail; 
}

module.exports = snakeToCamel;
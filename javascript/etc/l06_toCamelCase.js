/* function to modify words combinations into camelCase */

function toCamelCase(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    str = arr.join('');

    return str;
}

console.log(toCamelCase('background-color'));
console.log(toCamelCase('list-style-image'));
console.log(toCamelCase('-webkit-transition'));
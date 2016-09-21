/* Write a JavaScript function that returns a passed string with letters in alphabetical order. */

// Example string: webmaster
// Expected Output: abeemrstw

function sortStrings(str) {
    var arr = str.split('');
    arr.sort();
    strG = str;

    return arr.join('');
}

var str = 'webmaster';

console.log(str + ' --> ' + sortStrings(str));
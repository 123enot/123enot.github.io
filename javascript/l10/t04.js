/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. */

// Example string: the quick brown fox
// Expected Output: The Quick Brown Fox

function capitalize(str) {
    var arr = str.split(' ');
    for (var i = 0 ; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(' ');
}

var str = 'the quick brown fox';

console.log(capitalize(str));
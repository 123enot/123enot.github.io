/* 3 dots for strings over 20 symbols */

function cutString(str) {
    if (str.length > 20) {
        return str.substr(0, 20) + '...';
    }
    return str;
}


var string = 'Here\'s some text to test the function "three dots"';

console.log( 'Result: "' + cutString(string) + '"');
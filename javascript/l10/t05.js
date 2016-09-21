/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */

//Example string: Web Development Tutorial
//Expected Output: Development

function getLongestWord(str) {
    var words = str.split(' '),
        max = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > max.length) {
            max = words[i];
        }
    }

    return max;
}


// Results:

var str = 'Web Development Tutorial';
console.log(getLongestWord(str));
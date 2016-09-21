/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */

//Example string: Web Development Tutorial
//Expected Output: Development

function getLongestWord(str) {
    var words = str.split(' ');
    var max = words[0];

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > max.length) {
            max = words[i];
        }
    }

    return max;

    // Second variant:
    /*
    words.sort(function(a, b) {
        return b.length - a.length;
    });
    return words[0];
    */
}

// Results:

var str = 'Web Development Tutorial_how_to_do_some_things';
console.log(getLongestWord(str));
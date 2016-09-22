/*
 You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-∞,100]

 Examples:
 pattern(5):

     12345
    12345
   12345
  12345
 12345
*/

function pattern(n){
    if ( n <= 0 ) return '';

    var output="";

    for (var i = 0; i < n; i++) {

        for (var j = 1; j < (n - i); j++) output += ' ';
        for (var k = 1; k <= n; k++) output += k % 10;
        for (var l = (j + n); l <= (2*n - 1); l++ ) output += ' ';

        if (i !== (n - 1)) output += '\n';
    }

    return output;
}

// Results:

console.log(pattern(14));


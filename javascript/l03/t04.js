/* FizzBuzz: to show all numbers, with words 'FizzBuzz' (for numbers '/' on 3 and 5) */

var result = '',
    max = 100;

for (var i = 1; i < max; i++) {
    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        result = result + 'FizzBuzz' + ' ';
    } else {
        result = result + i + ' ';
    }
}

console.log(result);
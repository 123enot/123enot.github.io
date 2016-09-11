/* FizzBuzz: to show all numbers,
    with words 'Fizz' (for numbers '/' on 3 but not on 5)
    or 'Buzz' (for numbers '/' on 5 but not on 3) */

var result = '',
    max = 100;

for (var i = 1; i < max; i++) {
    if ( (i % 3 == 0) && (i % 5 != 0) ) {
        result = result + 'Fizz' + ' ';
    } else if ( (i % 3 != 0) && (i % 5 == 0) ) {
        result = result + 'Buzz' + ' ';
    } else {
        result = result + i + ' ';
    }
}

console.log(result);
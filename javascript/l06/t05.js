/* function to check for palindromes */

function isPal(str) {
    var arr = [],
        arrReversed = [];

    str = str.toLowerCase();
    arr = str.split(' ');
    str = arr.join('');
    arr = str.split('');
    arrReversed = str.split('');
    arrReversed.reverse();

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arrReversed[i]) return false;
    }

    return true;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
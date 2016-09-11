/* NATURAL NUMBERS */

var n,
    max = 100,
    result = '';

outer: for (n = 2; n <= max; n++) {

    for (var i = 2; i < n; i++) {
        if (n % i == 0) continue outer;
    }

    result = result + n + ' ';
}

console.log( "Natural numbers: " + result );

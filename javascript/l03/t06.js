/* function pow(x, n) which returns x in power n (for example, 3^2=9) */

function pow(num, power) {
    var result = 1;

    if (power < 0) {

        for (var i = 1; i <= -power; i++) {
            result /= num;
        }

    } else {
        for (i = 1; i <= power; i++) {
            result *= num;
        }
    }

    return result;
}

var n = 5,
    p = -5;

console.log( 'Number ' + n + ' in power (' + p + ') = ' + pow(n, p) );

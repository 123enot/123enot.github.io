/* function pow(x, n) which returns x in power n (for example, 3^2=9) */

function pow(num, power) {
    var result = 1;

    for (var i = 1; i <= power; i++) {
        result *= num;
    }

    return result;
}

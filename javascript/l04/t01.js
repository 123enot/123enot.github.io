/* get Fibonacci numbers */

function fib(n) {
    var result = {
        '0': 0,
        '1': 1
    };

    for (var i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
}

for (var j = 0; j <= 77; j++) {
    console.log('test =>  Fibonacci number [' + j + '] = ' + fib(j));
}

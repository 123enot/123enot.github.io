/* Make logging decorator for function with multiple arguments */

function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    return function () {
        log.push([].slice.call(arguments));

        return f.apply(this, arguments);
    }
}


// Results:

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
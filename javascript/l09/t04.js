/* Make caching decorator */

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};

    return function () {

        if (!cache[arguments[0]]) {
            cache[arguments[0]] = f.apply(this, arguments);
        }

        return cache[arguments[0]];
    }
}


// Results:

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);

console.log('\na == b ' + (a == b) ); // true (значение закешировано)
console.log('a: ' + a + '\nb: ' + b);

b = f(2);

console.log('\na == b ' + (a == b) ); // false, другой аргумент => другое значение
console.log('a: ' + a + '\nb: ' + b);

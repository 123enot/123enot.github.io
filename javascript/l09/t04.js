/* Make caching decorator */

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    return function () {
        var result;
        if (!cach[arguments[0]]) {
            result = f.apply(this, arguments);
            cach[arguments[0]] = result;
            return result;
        }
        return cach[arguments[0]];
    }
}

var cach = {};

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

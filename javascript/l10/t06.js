/* Write a JavaScript function which accepts an argument and returns the type. */

function getType(arg) {
    if (arguments.length === 0) { return 'Error: there is no arguments!'; }

    return typeof arg;
}

var arg = null;

console.log(getType(arg));
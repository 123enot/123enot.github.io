/*
 We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

 var callbacks = createFunctions(5); // create an array, containing 5 functions

 callbacks[0](); // must return 0
 callbacks[3](); // must return 3

 */


function createFunctions(n) {
    var callbacks = [];

    function getNum(num) {
        return function () {
            return num;
        }
    }

    for (var i = 0; i < n; i++) {
        callbacks.push(getNum(i));
    }

    return callbacks;
}


var callbacks = createFunctions(5);
console.log(callbacks[0]());
console.log(callbacks[3]());
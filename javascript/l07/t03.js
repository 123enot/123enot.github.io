/*
 Write a method make_lazy that takes in a function (symbol for Ruby) and the arguments to the function and returns another function (lambda for Ruby) which when invoked, returns the result of the original function invoked with the supplied arguments.
 For example:
 Given a function add

 function add (a, b) {
 return a + b;
 }

 One could make it lazy as:

 var lazy_value = make_lazy(add, 2, 3);

 The expression does not get evaluated at the moment, but only when you invoke lazy_value as:

 lazy_value() => 5

 The above invokes then performs the sum.
 Please note: The functions that are passed to make_lazy may take one or more arguments and the number of arguments is not fixed.
 */

function add (a, b, c) {
    return a + b + c;
}

var make_lazy = function (func) {
    var args = [].slice.call(arguments, 1);

    return function () {
        return func.apply(null, args);

    }
};

var lazy_value = make_lazy(add, 2, 13, 23);

console.log(lazy_value());
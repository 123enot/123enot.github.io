/*
 function sum(arr) {
 return arr.reduce(function(a, b) {
 return a + b;
 });
 }

 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

 CREATE FUNCTION WHICH PERFORMS THE SAME EFFECT, USING CALL/APPLY/METHOD BORROWING
 */

function sumArgs() {
    var args = [].slice.call(arguments);

    return args.reduce(function(a, b) {
        return a + b;
    });
}

console.log( sumArgs(1, 2, 3, 24) ); // 30, аргументы переданы через запятую, без массива
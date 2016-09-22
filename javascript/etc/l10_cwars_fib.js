/*
 The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce.
 If the argument is less than or equal to 0 then return empty array

 Example:
 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
*/

function fibonacci(n) {
    var fib = [0];
    if (n <= 0 || !n) return [];
    for (var i = 1; i < n; i++) {
        if (i == 1) {
            fib.push(i);
            continue;
        }
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(10));

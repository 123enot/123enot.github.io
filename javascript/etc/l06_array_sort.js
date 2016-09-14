/* function to sort arrays with numbers and strings */

var arr = [1, 23, 'grape', 21, 13, 'apple', 'peach', 0 , 2];

arr.sort(function (a, b) {

    if (isNaN(+a) && !isNaN(+b)) return -1;
    if (!isNaN(+a) && isNaN(+b)) return 1;
    if (isNaN(+a) && isNaN(+b) && a > b) return 1;
    if (isNaN(+a) && isNaN(+b) && a < b) return -1;
    return a - b;

});

console.log(arr);
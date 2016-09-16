/* array sorting strings */

var arr = ['HTML', 'JavaScript', 'CSS'],
    arrSorted = [];

for (var i = 0; i < arr.length; i++) {
    arrSorted.push(arr[i]);
}

arrSorted.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    else return 0;
});

console.log('arrSorted: ' + arrSorted);
console.log('arr: ' + arr);

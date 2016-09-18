/* find lost element in array containing 10 elements (1,2,3,4,5,6,7,8,9,10) in random order */

var arr = [1, 3, 6, 2, 7, 5, 8, 4, 9],
    lost;

for (var i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) {
        lost = i;
        break;
    }
}

console.log('Lost element: ' + lost);
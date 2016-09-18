/* Sorting only even elements in array */

var arr = [1, 56, 32, 21, 15, 14, 67, 44, 78, 3, 68, 6, 51, 4];

var arrEven = arr.filter(function(item){
    if (item % 2 == 0) return item;
});

arrEven.sort(function(a, b) {
    return a - b;
});

for (var i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] = arrEven[j];
        j++;
    }
}

console.log('Sorted array: [' + arr + ']');


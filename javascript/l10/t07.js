/* Write a function shuffle(arr) to shuffle an array.  */

function shuffle(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = Math.random();
    }

    arr.sort(function (a, b) {
        return obj[a] - obj[b];
    });

    return arr;
}


// Results:

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 0; i < 10; i ++) {
    console.log(shuffle(arr));
}


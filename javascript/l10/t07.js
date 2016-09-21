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

var arr = [23, 432, "fgd", 5234, '34', 12324, 'df', 734];

for (var i = 0; i < 10; i ++) {
    console.log(shuffle(arr));
}


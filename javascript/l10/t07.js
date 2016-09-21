/* Write a function shuffle(arr) to shuffle an array.  */

function shuffle(arr) {
    arr.sort(function () {
        return (Math.random() < .5) ? -1 : 1;
    });
    return arr;
}


// Results:

var arr = [23, 432, "fgd", 5234, '34', 12324, 'df', 734];

for (var i = 0; i < 10; i ++) {
    console.log(shuffle(arr));
}


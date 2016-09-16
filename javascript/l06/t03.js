/* random sort */

var arr = [1, 2, 3, 4, 5];

arr.sort(function() {
    var rand = Math.random(),
        sign = (rand < .5) ? -1 : 1;
    //console.log(sign, rand);

    return sign;
});

console.log(arr);
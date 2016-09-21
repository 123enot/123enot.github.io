/* write function to get max numbers in array */

function getMaxNumber(arr) {
    return Math.max.apply(this, arr);
}


// Results:
var max = getMaxNumber([1,30,40,2,7]); // 40
console.log(max);

max = getMaxNumber([1,15,-20,2,-7]); // 15
console.log(max);



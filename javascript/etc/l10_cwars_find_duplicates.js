/*
 Given an array, find the duplicates in that array, and return a new array of those duplicates.
 Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).
*/

function duplicates(arr) {
    var dupl = [],
        unique = [];

    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
        else if (dupl.indexOf(arr[i]) === -1) {
            dupl.push(arr.splice(i, 1)[0]);
            --i;
        }
    }

    return dupl;
}


var arr = [1, 2, 4, 4, 5, 3, '5', 3, 1, 5, 3, '5'];

console.log(duplicates(arr));

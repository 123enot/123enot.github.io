//   ---------------------------------
//                        male female
//   1. sex               1    0
//   ---------------------------------
//                        yes  no
//   2. marriage          1    0
//   ---------------------------------
//                        yes  no
//   3. higher education  1    0
//   ---------------------------------
//                        0 - 7   
//   children             bits 4-6
//   ---------------------------------
//                        0 - 63
//   age                  bits 7-12
//   ------------------------------------
//                pure values:
//                ------------
// isMale       : 000000000001  --> number 1
// isMarried    : 000000000010  --> number 2
// hasEducation : 000000000100  --> number 4

let isMale = item => !!(item & 1),
    isMarried = item => !!(item & 2),
    hasEducation = item => !!(item & 4),
    array = [],
    maxNum = 4095; // 111111111111 --> number 4095

for (let i = 0; i < 500; i++) {
    array.push( Math.round(Math.random()*maxNum) );
}

console.log('initial array: ' + array);

let arrA = array.filter(function(item) {
        return isMale(item) && !isMarried(item) && hasEducation(item) && (item >> 6 < 30);
    }),
    arrB = array.filter(function(item) {
        return !isMale(item) && isMarried(item) && ( item >> 3 & 2 && item >> 3 & 1 || item >> 3 & 4 );
    }),
    arrC = array.filter(function(item) {
        return !isMale(item) && !isMarried(item) && hasEducation(item) && !(item >> 3 & 7) && (item >> 6 >= 25 && item >> 6 <= 30);
    });

console.log('array A: ' + arrA);
console.log('array B: ' + arrB);
console.log('array C: ' + arrC);

// Visual check for mistakes:
let a = {},
    b = {},
    c = {};

function listValues(obj, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = arr[i].toString(2);
    }
    for (let key in obj) {
        console.log(key + ': ' + obj[key]);
    }
}

console.log('in array A: ');
listValues(a, arrA);

console.log('in array B: ');
listValues(b, arrB);

console.log('in array C: ');
listValues(c, arrC);
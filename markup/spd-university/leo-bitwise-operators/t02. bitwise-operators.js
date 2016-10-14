//   ----------------------------------
//                        male female
//   1. sex               1    0
//   ----------------------------------
//                        yes  no
//   2. marriage          1    0
//   ----------------------------------
//                        <30  [25; 30]
//   3. age:              1    0
//   ----------------------------------
//                        no   >=3
//   4. children:         1    0
//   ----------------------------------
//                        yes  no
//   5. higher education: 1    0

// A: 1_101
// B: _0_10
// C: 11000

let array = [],
    maxBit = 5 + 1,  // The number of bits + controlling bit
    maxNum = parseInt(new Array(maxBit + 1).join('1'), 2);

for (let i = 0; i < 500; i++) {
    array.push( Math.round(Math.random()*maxNum) );
}

console.log('initial array: ' + array);

let a = {
        '1': '1',
        '2': '0',
        '3': '1',
        '5': '1'
    },

    b = {
        '1': '0',
        '2': '1',
        '4': '0'
    },

    c = {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '1',
        '5': '1'
    };

a[maxBit] = '1';
b[maxBit] = '1';
c[maxBit] = '1';

let arrA = filterInfo(array, a),

    arrB = filterInfo(array, b),

    arrC = filterInfo(array, c);

function filterInfo(arr, obj) {
    return arr.filter(function(item) {
        if (item.toString(2).length >= maxBit) {
            let num = item.toString(2).slice(-maxBit).split('');

            for (let key in obj) {
                if (obj[key] !== num[num.length - key]) return false;
            }
            return true;
        }
    });
}

console.log('array A: ' + arrA);
console.log('array B: ' + arrB);
console.log('array C: ' + arrC);

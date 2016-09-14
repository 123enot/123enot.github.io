/* Calculator */

var arrToSum = [];

function calculator() {
    var arr = [],
        entered,
        sum = 0;

    while (true) {
        entered = prompt('Enter numbers to sum:');
        if (entered === null || entered === '' || isNaN(+entered) || entered.indexOf(' ') !== -1) {break;}

        arr.push(+entered);
    }

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        arrToSum.push(arr[i]);
    }

    return sum;
}

console.log('Total: ' + calculator(), '\nArray of numbers: [' + arrToSum + ']');
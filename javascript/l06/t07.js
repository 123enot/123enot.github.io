/* function to clean array from anagrams */

function anClean(arr) {
    var arrUnique = [],
        arrNum = [],
        newArr = [],
        str = [];

    for (var i = 0; i < arr.length; i++) {
        str[i] = arr[i].split('');
        str[i].sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        str[i] = str[i].join('').toLowerCase();
    }

    for (var j = 0; j < str.length; j++) {
        if (arrUnique.indexOf(str[j]) === -1) {
            arrUnique.push(str[j]);
            arrNum.push(j);
        }
    }

    //console.log('arrNum: ' + arrNum);
    for (var k = 0; k < arrUnique.length; k++) {
        newArr[k] = arr[arrNum[k]];
    }

    return newArr;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
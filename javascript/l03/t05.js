/* CHESS BOARD */

var result = '',
    max = 8;

for (var i = 1; i <= max; i++) {
    if (i % 2 == 0) {
        for (var j = 1; j <= max; j++) {
            if (j % 2 == 0) {
                result += '#';
            } else {
                result += ' ';
            }
        }
    } else {
        for (j = 1; j <= max; j++) {
            if (j % 2 != 0) {
                result += '#';
            } else {
                result += ' ';
            }
        }
    }

    result += '\n';
}

console.log(result);
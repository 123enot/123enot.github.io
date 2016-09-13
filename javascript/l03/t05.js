/* CHESS BOARD */

function makeChessBoard(size) {
    var full = '#',
        empty = ' ',
        change,
        result = '';

    for (var i = 1; i <= size*size; i++) {

        if (i % 2 != 0) {
            result += full;
        } else {
            result += empty;
        }

        if ( (i % size == 0) && (size % 2 == 0) ) {
            result += '\n';

            change = full;
            full = empty;
            empty = change;
        } else if (i % size == 0) {
            result += '\n';
        }
    }

    return result;
}

function makeChessBoardOld(max) {
    var result = '';

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

    return result;
}


/* Test for functions */

for (var j = 1; j <= 20; j++) {
    console.log('OLD: (' + j + ')\n' + makeChessBoardOld(j));
    console.log('NEW: (' + j + ')\n' + makeChessBoard(j));
}


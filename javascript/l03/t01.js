/* Enter numbers over '100' or press 'Esc' / 'Cancel' */

while (true) {

    var num = prompt('Enter the number > 100: ');
    if ((+num > 100) || (num == null)) {
        break;
    }

}

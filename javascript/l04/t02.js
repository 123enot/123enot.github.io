/* Function => to check strings for 'spam' / 'sex' words. */

function checkSpam(str) {
    var strLow = str.toLowerCase();
    if ( (strLow.indexOf('spam') != -1) || (strLow.indexOf('sex') != -1) ) {
        return true;
    }

    return false;
}

console.log( checkSpam('get new Sex videos') );
console.log( checkSpam('[SPAM] How to earn fast money?') );
console.log( checkSpam('New PSD template') );

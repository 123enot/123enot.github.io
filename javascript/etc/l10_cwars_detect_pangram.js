/*
 A pangram is a sentence that contains every single letter of the alphabet at least once.
 For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

 Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    var letters = string.split(' ').join('').toLowerCase().split('').sort();

    for (var i = 0; i < letters.length - 1; i++) {
        if (letters[i].charCodeAt(0) < 97) {
            letters.splice(i, 1);
            --i;
            continue;
        }
        if ((letters[0] !== 'a') || (letters[letters.length - 1] !== 'z')) return false;
        if ((letters[i+1].charCodeAt(0) - letters[i].charCodeAt(0)) > 1) return false;
    }

    return true;
}

var str = 'The quick brown fox jumps over the lazy dog';
console.log(isPangram(str));
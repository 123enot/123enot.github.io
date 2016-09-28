// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
//
// When this method is called, it reverses the order of the items in the original array.
//     Then then it returns that same, original array. No new arrays should need to be created to pass this kata.
//
//     Here's an example:
//
// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.reverse = function () {
    var mid,
        last = this.length - 1;

    for (var i = 0; i < Math.floor(this.length / 2); i++) {
        mid = this[last - i];
        this[last - i] = this[i];
        this[i] = mid;
    }

    return this;
};

console.log(input.reverse());
console.log(input);
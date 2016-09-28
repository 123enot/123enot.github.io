// Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
//     Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function() {
    var colors = 'white red black blue purple pink yellow green brown maroon'.split(' ');
    this.color = colors[Math.floor(Math.random()*colors.length)];
};


for (var i = 0; i < 10; i++) {
    var ghost = new Ghost();
    console.log(ghost.color);
}

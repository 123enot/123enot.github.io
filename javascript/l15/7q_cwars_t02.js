// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of
// a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
//
//     Create an Singleton pattern, so there is one object in system.
//
//     Example:
//
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

function Singleton () {
    if (Singleton._copy) {
        return Singleton._copy;
    }

    Singleton._copy = this;
}

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2);
obj1.test = 1;
console.log(obj2.test);
console.log(obj1 instanceof Singleton);

// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1
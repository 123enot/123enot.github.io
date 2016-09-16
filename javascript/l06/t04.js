/* Sorting array of object according to objects' property values */

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a, b, prop) {
    prop = 'age';
    
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    else return 0;
});

console.log(people);
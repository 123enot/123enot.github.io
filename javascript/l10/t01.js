/* Convert object properties values into 2 arrays: with numbers and strings respectively */

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

//var ages = [20,30,40];
//var names = ['Ivanov', 'Petrov', 'Sidorov'];

var ages = [],
    names = [];

for (var keys in obj) {
    if (typeof obj[keys] === 'number') { ages.push(obj[keys]) }
    if (typeof obj[keys] === 'string') { names.push(obj[keys]) }
}


// Result:
console.log(ages);
console.log(names);

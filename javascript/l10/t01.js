/* Write methods which convert object properties values into 2 arrays: with numbers and strings respectively */

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',

    extractNumber: function() {
        var num = [];
        for (var keys in this) {
            if (typeof this[keys] === 'number') { num.push(this[keys]) }
        }
        return num;
    },

    extractString: function() {
        var str = [];
        for (var keys in this) {
            if (typeof this[keys] === 'string') { str.push(this[keys]) }
        }
        return str;
    }
};

// Result:
console.log(obj.extractNumber());
console.log(obj.extractString());

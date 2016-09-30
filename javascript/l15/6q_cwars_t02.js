// You are given a complex object that has many deeply nested variables.
// You don't want to go the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

Object.prototype.hash = function(string) {
    var arr = string.split('.'),
        i = -1,
        result;

    function getObj (elem) {
        i++;
        if (i === arr.length) {
            return result = elem;
        }

        if (typeof elem[arr[i]] === 'object') {
            return elem[getObj(elem[arr[i]])];
        }
        else return result = elem[arr[i]];
    }

    getObj(this);
    return console.log(result);
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined


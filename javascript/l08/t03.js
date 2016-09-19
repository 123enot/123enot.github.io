/* get/set properties */

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.fullName.split(' ')[0];
        },

        set: function (value) {
            this.fullName = value + ' ' + this.lastName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.fullName.split(' ')[1];
        },

        set: function (value) {
            this.fullName = this.firstName + ' ' + value;
        }
    });
}


var vasya = new User('Александр Пушкин');

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';
//vasya.firstName = 'Лев';

console.log(vasya.fullName ); // Александр Толстой
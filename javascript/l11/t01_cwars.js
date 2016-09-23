/*
 Your task will be to create a basic type-checker "framework/api" for JavaScript.
 Let's call it typer.js . Your API must contain the following methods:

 isNumber (ruby is_number?)
 isString (ruby is_string?)
 isArray (ruby is_array?)
 isFunction (ruby do not implement this)
 isDate (ruby is_time?)
 isRegExp (ruby is_regexp?)
 isBoolean (ruby is_boolean?)
 isError (ruby is_exception?)
 isNull (ruby is_nil?)
 isUndefined (ruby is_nil?)

 Create these utility methods for input validation. For example, if the argument is a number, then isNumber called with this argument should return true.
 Example

 assert.equal(typer.isNumber(5), true);
 assert.equal(typer.isString({}), false);
*/


var typer = (function() {

    return {
        isNumber: function (data) {
            if (isNaN(data)) return;
            return this.getClass(data) === 'Number';
        },
        isString: function (data) {
            return this.getClass(data) === 'String';
        },
        isArray: function (data) {
            return this.getClass(data) === 'Array';
        },
        isFunction: function (data) {
            return this.getClass(data) === 'Function';
        },
        isDate: function (data) {
            return this.getClass(data) === 'Date';
        },
        isRegExp: function (data) {
            return this.getClass(data) === 'RegExp';
        },
        isError: function (data) {
            return this.getClass(data) === 'Error';
        },
        isNull: function (data) {
            return this.getClass(data) === 'Null';
        },
        isUndefined: function (data) {
            return this.getClass(data) === 'Undefined';
        },
        isBoolean: function (data) {
            return this.getClass(data) === 'Boolean';
        },
        getClass: function (cls) {
            var toString = ({}).toString;
            return toString.call(cls).slice(8, -1);
        }
    };
}());


// Testing:

var str = 'number string array function date regExp error null undefined boolean',
    props = str.split(' '),
    arr = [4, '3', [3, 54, 'er'], function() {}, new Date, /f/, new Error, null, undefined, false],
    keys = [];

props = props.map(function (item) {
       return item.charAt(0).toUpperCase() + item.slice(1);
    });

for (var key in typer) {
    keys.push(key);
}

for (var i = 0; i < 10; i++) {
    console.log( arr[i] );
    console.log( keys[i] + ': ' + typer['is' + props[i]](arr[i]) );
}

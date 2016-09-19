/* calculator */

function Calculator() {
    var result = 0;

    this.calculate = function(str) {
        var elem = str.split(' ');

        this.a = +elem[0];
        this.b = +elem[2];
        this.operator = elem[1];

        result = operators[this.operator](this.a, this.b);

        Calculator.count++;
        Calculator.memory += result;

        return result;
    };

    this.addMethod = function (oper, func) {
        operators[oper] = func;
    };

    var operators = {

        '+': function (a, b) {
          return a + b;
        },

        '-': function (a, b) {
           return a - b;
        }
    };

}
// Static properties and methods:
Calculator.memory = 0;
Calculator.count = 0;

Calculator.getMemory = function () {
    return console.log('totsl: ' + this.memory + '\noperations: ' + this.count);
};

Calculator.resetMemory = function () {
    this.memory = 0;
    this.count = 0;
};

// step 1 (calculate with +/- :
var calc = new Calculator;

console.log( calc.calculate('3 + 7') ); // 10
console.log( calc.calculate('15 - 8') ); // 7

// step 2 (add new methods):

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('3 ** 11');
console.log( result ); // 177147
console.log( powerCalc.calculate('15 * 8') ); // 120
console.log( powerCalc.calculate('165 / 8') ); // 20.625

Calculator.getMemory();
Calculator.resetMemory();
Calculator.getMemory();


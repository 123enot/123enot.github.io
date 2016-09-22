/*
 Let's build a calculator that can calculate the average for an arbitrary number of arguments.
 The test expects you to provide a Calculator object with an average method:
 Calculator.average()

 The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
 It expects Calculator.average(3,4,5) to return 4.
*/

var Calculator = {
    average: function() {
        if (arguments.length === 0) return 0;
        for (var i = 0, result = 0; i < arguments.length; i++) {
            if ( (arguments[i] - Math.round(arguments[i])) !== 0 ) return 'Arguments are not integer!';
            result += arguments[i];
        }
        return result / arguments.length;
    }
};

console.log(Calculator.average(23, 43, 34, 2));

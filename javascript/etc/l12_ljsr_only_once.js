// Напишите функцию debounce(f, ms), которая возвращает обёртку,
// которая передаёт вызов f не чаще, чем раз в ms миллисекунд.

// «Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.

// Например:

function f(x) {
    console.log(x);
}

function debounce(func, ms) {
    var start = 0,
        process = false,
        end,
        result;

    return function () {
        var args = arguments;
        end = Date.now();

        if ( ((end - start) > ms) || (process === false) ) {
            result = func.apply(this, args);
            process = true;
            start = Date.now();
            return result;
        }
    };
}

var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор

// Упрощённо можно сказать, что debounce возвращает вариант f,
// срабатывающий не чаще чем раз в ms миллисекунд.
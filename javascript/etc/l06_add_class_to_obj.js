/* function to add new class to obj's className */

function addClass(obj, cls) {
    var arr = obj.className.split(' ');

    if (arr.indexOf(cls) === -1) {
        arr.push(cls);
        obj.className = arr.join(' ');
    }
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'menu');
addClass(obj, 'me');

console.log(obj.className);
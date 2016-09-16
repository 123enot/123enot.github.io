/* function removing existing class */

var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var arr = [];

    if (!obj.className) return 'Wrong property!';
    arr = obj.className.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(cls) === -1) {break;}
        arr.splice(arr.indexOf(cls), 1);
    }

    obj.className = arr.join(' ');

    return obj.className;
}

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'

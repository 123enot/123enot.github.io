/* Get array of unique CSS classes, sorted by frequency of its use */

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link', 'link', 'link', 'menu', 'menu__item', 'link', 'link', 'menu__item', 'menu__item'];

// result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];

var cls = {},
    arrUnique = [];

for (var i = 0; i < arr.length; i++) {
    if ( !cls[arr[i]] ) {
        cls[arr[i]] = 1
    } else cls[arr[i]]++;
}

for (var keys in cls) {
    arrUnique.push(keys);
}

arrUnique.sort(function (a, b) {
    return cls[b] - cls[a];
});

// Result:

console.log( arrUnique);
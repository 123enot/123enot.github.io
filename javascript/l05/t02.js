/* To write function for multiplying number values by 2 */

function multiplyNumeric(obj) {
    for (keys in obj) {
        if (typeof obj[keys] === 'number') {
            obj[keys] *= 2;
        }
    }
    return obj;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log( multiplyNumeric(image) );
console.log( multiplyNumeric(image) );
console.log( multiplyNumeric(image) );

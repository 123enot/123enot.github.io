function Rectangle(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

let rectangle1 = new Rectangle(5, 10, 420, 250);
let rectangle2 = new Rectangle(100, 100, 500, 450);

if (rectangle2.x1 >= rectangle1.x2 || rectangle2.y1 >= rectangle1.y2) {
    console.log('The intersection of rectangles is impossible!');
} else {
    let a = (rectangle1.x2 - rectangle2.x1) / 2,
        b = (rectangle1.y2 - rectangle2.y1) / 2,
        x_center = rectangle2.x1 + a,
        y_center = rectangle2.y1 + b,
        min_x = rectangle2.x1,
        max_x = rectangle1.x2,
        min_y = rectangle2.y1,
        max_y = rectangle1.y2,
        x_rand,
        y_rand,
        count = 0,
        array = [];

    while(count < 10) {
        x_rand = Math.round(Math.random()*(max_x - min_x)) + min_x;
        y_rand = Math.round(Math.random()*(max_y - min_y)) + min_y;
        if ( (Math.pow((x_rand - x_center), 2) / Math.pow(a, 2) + Math.pow((y_rand - y_center), 2) / Math.pow(b, 2)) <= 1 ) {
            array.push({x: x_rand - x_center, y: y_rand - y_center});
            count++;
        }
    }
    console.log(array);

    let c = document.getElementById('visual').getContext('2d');

    c.fillStyle = "royalblue";
    c.globalAlpha = 50 / 100;
    c.fillRect(rectangle1.x1, rectangle1.y1, rectangle1.x2 - rectangle1.x1, rectangle1.y2 - rectangle1.y1);
    c.fillStyle = "salmon";
    c.globalAlpha = 60 / 100;
    c.fillRect(rectangle2.x1, rectangle2.y1, rectangle2.x2 - rectangle2.x1, rectangle2.y2 - rectangle2.y1);
    c.globalAlpha = 1.0;

    let ellipse = document.getElementById('ellipse');
    ellipse.style.top = y_center - b + 'px';
    ellipse.style.left = x_center - a + 'px';
    ellipse.style.width = a * 2 + 'px';
    ellipse.style.height = b * 2 + 'px';
    ellipse.style.borderRadius = (a + 'px / ' + b + 'px');

    for (var i = 0; i < 10; i++) {
        let dot = document.createElement('div');
        document.body.appendChild(dot);
        dot.className = 'dots';
        dot.style.top = y_center + array[i]['y'] + 'px';
        dot.style.left = x_center + array[i]['x'] + 'px';
        console.log(array[i]['y']);
    }
}
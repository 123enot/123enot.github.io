(function start() {
    let maxResX = 800,
        maxResY = 600,

        rectangle1 = {
            x1: Math.random()*maxResX,
            y1: Math.random()*maxResY,
            x2: Math.random()*maxResX,
            y2: Math.random()*maxResY
        },

        rectangle2 = {
            x1: Math.random()*maxResX,
            y1: Math.random()*maxResY,
            x2: Math.random()*maxResX,
            y2: Math.random()*maxResY
        },

        mutual = {};

    console.log(rectangle1);
    console.log(rectangle2);


    function getBordersOfIntersection(obj, r1, r2) {
        if ( (Math.max(r1.x1, r1.x2) <= Math.min(r2.x1, r2.x2)) || ( Math.min(r1.x1, r1.x2) >= Math.max(r2.x1, r2.x2) ) || ( Math.max(r1.y1, r1.y2) <= Math.min(r2.y1, r2.y2) ) || ( Math.min(r1.y1, r1.y2) >= Math.max(r2.y1, r2.y2) ) ) {
            obj.hasField = false;
            let arrX = [r1.x1, r1.x2, r2.x1, r2.x2].sort(function(a, b) {return a - b;}),
                arrY = [r1.y1, r1.y2, r2.y1, r2.y2].sort(function(a, b) {return a - b;});
            console.log(arrX, arrY);


        } else {
            obj.hasField = true;
            let arrX = [r1.x1, r1.x2, r2.x1, r2.x2].sort(function(a, b) {return a - b;}),
                arrY = [r1.y1, r1.y2, r2.y1, r2.y2].sort(function(a, b) {return a - b;});
            console.log(arrX, arrY);

            obj.minX = arrX[1];
            obj.maxX = arrX[2];
            obj.minY = arrY[1];
            obj.maxY = arrY[2];
        }
    }


    function calcCoords(o) {
        if (!o.hasField) return false;

        let obj = {
            a: (o.maxX - o.minX) / 2,
            b: (o.maxY - o.minY) / 2,
            array: [],
        };

        obj.x_center = o.minX + obj.a;
        obj.y_center = o.minY + obj.b;

        let x_rand,
            y_rand;

        while(obj.array.length < 10) {
            x_rand = Math.random()*(obj.a*2) + o.minX;
            y_rand = Math.random()*(obj.b*2) + o.minY;
            if ( ((x_rand - obj.x_center) ** 2 / obj.a ** 2 + (y_rand - obj.y_center) ** 2 / obj.b ** 2) <= 1 ) {
                obj.array.push({x: x_rand - obj.x_center, y: y_rand - obj.y_center});
            }
        }
        return obj;
    }


    function drawFigures(rec1, rec2, obj) {
        let canv = document.getElementById('visual'),
            c = canv.getContext('2d');

        c.fillStyle = "royalblue";
        c.globalAlpha = 50 / 100;
        c.fillRect(rec1.x1, rec1.y1, rec1.x2 - rec1.x1, rec1.y2 - rec1.y1);
        c.fillStyle = "salmon";
        c.globalAlpha = 60 / 100;
        c.fillRect(rec2.x1, rec2.y1, rec2.x2 - rec2.x1, rec2.y2 - rec2.y1);
        c.globalAlpha = 1.0;

        let ellipse = document.getElementById('ellipse');
        ellipse.style.top = obj.y_center - obj.b + 'px';
        ellipse.style.left = obj.x_center - obj.a + 'px';
        ellipse.style.width = obj.a * 2 + 'px';
        ellipse.style.height = obj.b * 2 + 'px';
        ellipse.style.borderRadius = (obj.a + 'px / ' + obj.b + 'px');
    }


    function drawDots(obj) {
        for (var i = 0; i < 10; i++) {
            let dot = document.createElement('div');
            document.body.appendChild(dot);
            dot.className = 'dots';
            dot.style.top = obj.y_center + obj.array[i]['y'] + 'px';
            dot.style.left = obj.x_center + obj.array[i]['x'] + 'px';
        }
    }


    function drawTable(obj) {
        var table = document.createElement('table');

        for (let i = 0; i <= 10; i++) {
            let tr = document.createElement('tr');

            if (i === 0) {
                for (let j = 0; j < 3; j++) {
                    let th = document.createElement('th');
                    tr.appendChild(th);
                }
                table.appendChild(tr);
                table.rows[0].cells[0].textContent = '№';
                table.rows[0].cells[1].textContent = 'x';
                table.rows[0].cells[2].textContent = 'y';
                continue;
            }

            for (let j = 0; j < 3; j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }

            table.appendChild(tr);
            table.rows[i].cells[0].textContent = 'dot  ' + i;
            table.rows[i].cells[1].textContent = Math.floor(obj.array[i - 1]['x']);
            table.rows[i].cells[2].textContent = Math.floor(obj.array[i - 1]['y']);
        }

        table.style.top = obj.y_center + obj.b + 10 + 'px';
        table.style.left = obj.x_center - obj.a + 'px';
        document.body.appendChild(table);
    }


    getBordersOfIntersection(mutual, rectangle1, rectangle2);

    var field = calcCoords(mutual, rectangle1, rectangle2);

    if (field) {
        drawFigures(rectangle1, rectangle2, field);
        drawDots(field);
        drawTable(field);
    } else {
        let h1 = document.createElement('h1');
        h1.textContent = 'Unfortunately, the intersection of rectangles is impossible!';
        document.body.appendChild(h1);
        drawFigures(rectangle1, rectangle2, field);
    }

    setTimeout(function() {
        document.body.innerHTML = '<canvas id="visual" width="800" height="600"></canvas><div id="ellipse"></div>';
        start();
    }, 3000);

})()  
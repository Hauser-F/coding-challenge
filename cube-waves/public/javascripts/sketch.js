let angle = 0;
let a = 0;
let rectWidth = 30;
let maxD;

function setup() {
    createCanvas(400, 400, WEBGL);
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(0);
    ortho(-300, 300, -300, 300, 0, 1500);

    rotateX(radians(-45));
    rotateY(atan( 1 / sqrt(2)));

    for  (let z = 0; z < height; z += rectWidth) {
        for  (let x = 0; x < width; x += rectWidth) {

            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, -3, 3);
            let rectHeigth = map(sin(angle + offset), -1, 1, 50, 400);
            fill(225);
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(rectWidth -5, rectHeigth, rectWidth - 5);
            pop();
        }
    }

    angle += 0.06;
}
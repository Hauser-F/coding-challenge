var firework = [];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("black");
    stroke(255, 204, 0);
    strokeWeight(5);
    if(random(1) < 0.1) {
        firework.push(new Rocket());
    }

     for (let i = 0; i < firework.length; i++) {
        firework[i].update();
        firework[i].show();
    }


}
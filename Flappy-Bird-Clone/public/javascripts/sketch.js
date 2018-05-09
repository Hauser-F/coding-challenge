var bird;
var lines;
var highscore;

function setup() {
  // put setup code here
    createCanvas(600,500);
    reset();
}

function reset () {
    bird = new Bird();
    highscore = new Highscore();
    lines = [];
    lines.push(new Line());
}

function draw() {
    // put drawing code here
    background(0);
    highscore.show();
    highscore.update();

    for (var i = lines.length - 1; i >= 0; i--) {
        lines[i].update();
        lines[i].show();

        if (lines[i].hits(bird)) {
            clear();
            console.log("hit");
            textSize(32);
            fill('blue');
            text('Game Over', width/2 - 80, height/3);
            text('Click to play again', width/2 - 80, (height/3)*2)
            highscore.end();
            lines[i].show();
            noLoop();
        }

        if (lines[i].offscreen()) {
            lines.splice(i, 1);
        }
    };

    bird.update();
    bird.show();

    if (frameCount % 40 == 0) {
        lines.push(new Line());
    }

    console.log(bird.y);
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

function mousePressed() {
    reset();
    loop();
}
function Highscore() {

    this.score = 0;

    this.show = function () {
        textSize(32);
        fill('green');
        text(this.score, 10, 30);
    }

    this.update = function () {
        this.score += 1;
    }

    this.end = function () {
        text('Final Score: ' + this.score, width/2 - 80, height/2);
    }
}

function Rocket() {

    this.rocket = new Particle(random(width), height);
    this.exploded = false;

    this.update = function () {
        this.rocket.force(createVector(0, 0.08))
        this.rocket.update();

        if (this.rocket.vel.y >= 0) {
            this.exploded = true;
        }
    }

    this.show = function () {
        if (!this.exploded) {
            this.rocket.show();
        }
    };
}
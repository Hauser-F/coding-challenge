function Particle(x, y) {

    this.pos = createVector(x, y);
    this.vel = createVector(0, random(-7, -11));
    this.acc = createVector(0, 0);

    this.force = function (force) {
        this.acc.add(force);
    };

    this.update = function () {
        this.acc.add(this.acc);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    this.show = function () {
        point(this.pos.x, this.pos.y)
    };


};
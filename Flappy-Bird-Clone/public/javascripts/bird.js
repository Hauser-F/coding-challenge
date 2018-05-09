function Bird() {
    this.y = height/2;
    this.x = 60;

    this.gravity = 0.5;
    this.velocity = 0;
    this.lift = 10;

    this.show = function () {
        fill(255, 204, 0);
        rect(this.x, this.y, 15, 15)
    }

    this.up = function () {
        this.velocity -= this.lift;
    }


    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.85;
        this.y += this.velocity;

        if (this.y > height - 10) {
            this.y = height - 10;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}
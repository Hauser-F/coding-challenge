function Line () {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.hit = false;

    this.show = function () {
        if (this.hit == true) {
            fill('red');

        } else {
            fill(225);
        }

        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function () {
        this.x -= 5;
    }

    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.hit = true;
                return true;
            }
        }
    }
    
    this.offscreen = function () {
        return this.x < -20;
    }
}
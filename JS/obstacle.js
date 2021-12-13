class Obstacle {
    constructor (x, y, width, height, flagImg, type) {
        this.x = x;
        this.y = y;
        this.dx = -3;
        this.width = width;
        this.height = height;
        this.flagImg = flagImg
        this.type = type;
    }

    drawObstacle () {
        context.fillStyle = this.flag;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    move () {
        this.x += this.dx;
    }

    
}


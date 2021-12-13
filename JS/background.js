class BackgroundImage {
    constructor(){
      this.img = new Image();
      this.img.src = '/img/bg imgs/gamebackground.png';
      this.x = 0;
      this.speed = -1;
    }

    moveBackground() {
        this.x += this.speed;
        this.x %= canvas.width;
    }

    drawBackground() {
        context.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
            context.drawImage(this.img, this.x + canvas.width, 0);
        }
    }
}

let backgroundImage = new BackgroundImage();
class Obstacle {
    constructor (x, y, width, height, type) {
        this.x = x;
        this.y = y;
        this.dx = -3;
        this.width = width;
        this.height = height;
        this.type = type;
        this.flags = ["austria", "belgium", "czechrepublic", "denmark", "estonia", "finland", "france", "germany", "greece", "hungary", "iceland", "italy", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta", "netherlands", "norway", "poland", "portugal", "slovakia", "slovenia", "spain", "sweden", "switzerland"];
        this.img = new Image();
        this.img2 = new Image();
        }
        
    randomFlag () {
        return this.flags[Math.floor(Math.random() * this.flags.length)]
    }
    
    drawSchengenFlag () {
        this.img.src = `../img/${this.randomFlag()}.png`;
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawPickPocket () {
        this.img2.src = `../img/Pickpocket_Sprite.png`;
        context.drawImage(this.img2, this.x, this.y, this.width, this.height);
    }

    move () {
        this.x += this.dx;
    }
}


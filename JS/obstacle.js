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
        this.img.src = this.chooseImg();
        }
        
    randomFlag () {
        return this.flags[Math.floor(Math.random() * this.flags.length)]
    }
    
    chooseImg () {
        if (this.type === "flag") {
            return `./img/${this.randomFlag()}.png`;
        } else 
        return `./img/Pickpocket_Sprite.png`;
    }

    drawSchengenFlag () {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawPickPocket () {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    move () {
        this.x += this.dx;
    }
}


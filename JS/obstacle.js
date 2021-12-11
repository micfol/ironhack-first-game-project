class Obstacle {
    constructor (x, y, width, height, color, type) {
        this.x = x;
        this.y = y;
        this.dx = -3;
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = type;
    }

    drawObstacle () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    move () {
        this.x += this.dx;
    }

    // detectCollision(player, obstacle) {
    //     let playerLeft = rectangle.x;
    //     let playerRight = rectangle.x + rectangle.width;
    //     let playerUp = rectangle.y;
    //     let playerDown = rectangle.y + rectangle.height;
    
    //     let obstLeft = obstacle.x;
    //     let obstRight = obstacle.x + obstacle.width;
    //     let obstUp = obstacle.y;
    //     let obstDown = obstacle.y + obstacle.height;
    
    //     if (
    //         playerDown < obstUp ||
    //         playerUp > obstDown ||
    //         playerLeft > obstRight ||
    //         playerRight < obstLeft
    //       ) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    // }
}


// function pickPocket () {
//     let newObstacle = new Obstacle(canvas.width, 305, 30, 65, "green");
//     obstacles.push(newObstacle);
// }

// function schengenFlag () {
//     let randomY = Math.floor(Math.random() * 185) + 20;
//     let flagObstacle = new Obstacle(canvas.width, randomY, 50, 30, "blue");
//     obstacles.push(flagObstacle);
//     console.log(flagObstacle);
// }













// class PickPocketObs extends Obstacle {
//     constructor(x, y, width, height, color){
//     let newObstacle = new Obstacle(canvas.width, 305, 30, 65, "green");
//     obstacles.push(newObstacle);
//     };
// }

// new pickPocket() = PickPocketObs

// let obstacles = [];
// let obstaclesFrequency = 0;
// let gameOver = false;
// let animationId = null;
// let score = 0;
// let health = 100;







// function updateEverything() {
//     // rectangle.clearCanvas();
//     // rectangle.drawPlayer();
//     obstaclesFrequency++;
//     if (obstaclesFrequency % randomNum() === 1) {
//         pickPocket();
//     } else if (obstaclesFrequency % 100 === 1) { schengenFlag();
//     }

//     obstacles.forEach((obstacle) => {
//         obstacle.move();
//         obstacle.drawObstacle();
//         gameOver = detectCollision(obstacle);
//     });

//     if (!gameOver) {
//         animationId = requestAnimationFrame(updateEverything);
//     } else {
//         cancelAnimationFrame(animationId);
//         // create a custom Game Over screen to fill up the canvas.


//         // rectangle.clearCanvas();
//         context.fillStyle = "white";
//         context.font = "40px Verdana";
//         context.fillText("Womp Womp! Your Passport was Stolen!", 350, 225);
//         }

//     if (rectangle.x < 0) {
//         cancelAnimationFrame(animationId);
//         }
//     }

    // updateEverything();



var controller, rectangle, loop;

const width = canvas.width;
const height = canvas.height

let obstacles = [];
let obstaclesFrequency = 0;
let gameOver = false;
let gameWin = false;
let animationId = null;
let score = 0;
let health = 100;

function randomNum () {
    return Math.floor(Math.random() * 164) +40;
}

function pickPocket () {
    let newObstacle = new Obstacle(canvas.width, 305, 30, 65, "green", "pickpocket");
    obstacles.push(newObstacle);
}

function schengenFlag () {
    let randomY = Math.floor(Math.random() * 185) + 20;
    let flagObstacle = new Obstacle(canvas.width, randomY, 50, 30, "blue", "flag");
    obstacles.push(flagObstacle);
}

function drawScore() {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
    context.fillText(`Score: ${score} /26`, 8, 20);
  }

function drawHealth() {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("Health: "+health, 810, 20);
}

function detectCollision(obstacle,index) {
    let playerLeft = rectangle.x;
    let playerRight = rectangle.x + rectangle.width;
    let playerUp = rectangle.y;
    let playerDown = rectangle.y + rectangle.height;

    let obstLeft = obstacle.x;
    let obstRight = obstacle.x + obstacle.width;
    let obstUp = obstacle.y;
    let obstDown = obstacle.y + obstacle.height;

    if (
        playerDown < obstUp ||
        playerUp > obstDown ||
        playerLeft > obstRight ||
        playerRight < obstLeft
      ) {
        } else {
            if(obstacle.type === "flag"){
                score+= 1;
                obstacles.splice(index,1)
                console.log(score)
            }
            if(obstacle.type === "pickpocket"){
                health -= 10;
                obstacles.splice(index,1)
            }
      }
}

function updateEverything() {
    // rectangle.clearCanvas();
    // rectangle.drawPlayer();
    drawScore();
    drawHealth();
    obstaclesFrequency++;
    if (obstaclesFrequency % randomNum() === 1) {
        pickPocket();
    } else if (obstaclesFrequency % 100 === 1) { schengenFlag();
    }

    obstacles.forEach((obstacle,index) => {
        obstacle.move();
        obstacle.drawObstacle();
        detectCollision(obstacle,index);
        if(health <= 0){
            gameOver = true
        }
    });

    if (!gameOver) {
        animationId = requestAnimationFrame(updateEverything);
    } else {
        cancelAnimationFrame(animationId);
        // create a custom Game Over screen to fill up the canvas.
        context.fillStyle = "white";
        context.font = "40px Verdana";
        context.fillText("Womp Womp! Your Passport was Stolen!", 350, 225);
        }

    if (rectangle.x < 0) {
        cancelAnimationFrame(animationId);
        }
    }

updateEverything();






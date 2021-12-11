var controller, rectangle, loop;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height

let obstacles = [];
let obstaclesFrequency = 0;
let gameOver = false;
let animationId = null;
let score = 0;

let health = document.getElementById("health")
health.value -= 0;
// const player1 = new Player();

// function startGame(){}

// function clearCanvas(){}

// function updateAll(){}

function randomNum () {
    return Math.floor(Math.random() * 164) +40;
}

function updateEverything() {
    // rectangle.clearCanvas();
    // rectangle.drawPlayer();
    obstaclesFrequency++;
    if (obstaclesFrequency % randomNum() === 1) {
        pickPocket();
    } else if (obstaclesFrequency % 100 === 1) { schengenFlag();
    }

    obstacles.forEach((obstacle) => {
        obstacle.move();
        obstacle.drawObstacle();
        gameOver = detectCollision(obstacle);
    });

    if (!gameOver) {
        animationId = requestAnimationFrame(updateEverything);
    } else {
        cancelAnimationFrame(animationId);
        // create a custom Game Over screen to fill up the canvas.


        // rectangle.clearCanvas();
        context.fillStyle = "white";
        context.font = "40px Verdana";
        context.fillText("Womp Womp! Your Passport was Stolen!", 350, 225);
        }

    if (rectangle.x < 0) {
        cancelAnimationFrame(animationId);
        }
    }

updateEverything();






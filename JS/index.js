// DOM manipulation
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let splashScreen = document.getElementById('splash')
let gameScreen = document.getElementById('game-screen')
let winScreen = document.getElementById('game-win')
let gameOverScreen = document.getElementById('game-over')
let buttonStart = document.getElementById('buttonStart')
let buttonRestart1 = document.getElementById('restartButton1')
let buttonRestart2 = document.getElementById('restartButton2')

// End DOM Section
const width = canvas.width;
const height = canvas.height

//Game variables
var controller, rectangle, loop;
let currentGame; 

// Begin Functions

function randomNum () {
    return Math.floor(Math.random() * 164) +40;
}

function pickPocket () {
    let newObstacle = new Obstacle(canvas.width, 285, 30, 65, "pickpocket");
    currentGame.obstacles.push(newObstacle);
}

function schengenFlag () { 
    let randomY = Math.floor(Math.random() * 185) + 20;
    let flagObstacle = new Obstacle(canvas.width, randomY, 50, 40, "flag");
    currentGame.obstacles.push(flagObstacle);
}

function drawScore () {
    context.font = "16px Arial";
    context.fillStyle = "#FFFFFF";
    context.fillText(`Score: ${currentGame.score}/26`, 8, 20);
  }

function drawHealth () {
    context.font = "16px Arial";
    context.fillStyle = "#FFFFFF";
    context.fillText("Health: "+currentGame.health, 550, 20);
}

function detectCollision (obstacle,index) {
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
            if (obstacle.type === "flag"){
                currentGame.score+= 1;
                currentGame.obstacles.splice(index,1)
            }
            if (obstacle.type === "pickpocket"){
                currentGame.health -= 10;
                currentGame.obstacles.splice(index,1)
            }
      }
}

function updateEverything () {
    context.clearRect(0, 0, width, height);
    currentGame.backgroundImage.drawBackground();
    currentGame.backgroundImage.moveBackground();
    loop();
    drawScore ();
    drawHealth ();
    
    currentGame.obstaclesFrequency++;
    if (currentGame.obstaclesFrequency % randomNum() === 1) {
        pickPocket();
    } else if (currentGame.obstaclesFrequency % 100 === 1) { 
        schengenFlag();
    }

    currentGame.obstacles.forEach ((obstacle, index) => {
        obstacle.move();
        obstacle.drawSchengenFlag();
        obstacle.drawPickPocket();
        detectCollision(obstacle, index);
        if(currentGame.health <= 0){
            gameOver();
        }
        if(currentGame.score >= 26){
            gameWin();
        }
    });

    if(!currentGame.gameOver){
        currentGame.animationId = requestAnimationFrame(updateEverything);
    }

    if (rectangle.x < 0) {
        cancelAnimationFrame(currentGame.animationId);
        }
    }

// Screen swapping code

function gameOver() {
    currentGame.gameOver = true;
    cancelAnimationFrame(currentGame.animationId);
    gameOverScreen.style.display="flex";
    splashScreen.style.display="none";
    gameScreen.style.display="none";
    winScreen.style.display="none";
}

function gameWin() {
    cancelAnimationFrame(currentGame.animationId);
    currentGame.gameOver = true;
    winScreen.style.display="flex";
    gameOverScreen.style.display="none";
    splashScreen.style.display="none";
    gameScreen.style.display="none";
}

function startGame() {
    currentGame = new Game();
    rectangle.x_velocity = 0;
    rectangle.y_velocity = 0;
    gameScreen.style.display="flex";
    gameOverScreen.style.display="none";
    splashScreen.style.display="none";
    winScreen.style.display="none";
    updateEverything();
}

function restart() {
    rectangle.x_velocity = 0;
    rectangle.y_velocity = 0;
    startGame();
}

window.addEventListener('load', () => {    
    splashScreen.style.display = "flex";
    gameScreen.style.display = "none";
    gameOverScreen.style.display="none";
    winScreen.style.display ="none";

    buttonStart.addEventListener('click', () => {
        startGame();
    })

    buttonRestart1.addEventListener('click', () => {
        restart();
    })

    buttonRestart2.addEventListener('click', () => {
        restart();
    })
})

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
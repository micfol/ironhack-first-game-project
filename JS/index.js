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
let obstacles = [];
let obstaclesFrequency = 0;
let animationId = null;
let score = 0;
let health = 100;


let backgroundImage = new BackgroundImage();

// Begin Functions

function randomNum () {
    return Math.floor(Math.random() * 164) +40;
}

function pickPocket () {
    let newObstacle = new Obstacle(canvas.width, 285, 30, 65, "pickpocket");
    obstacles.push(newObstacle);
}

function schengenFlag () { 
    let randomY = Math.floor(Math.random() * 185) + 20;
    let flagObstacle = new Obstacle(canvas.width, randomY, 50, 40, "flag");
    obstacles.push(flagObstacle);
}

function drawScore () {
    context.font = "16px Arial";
    context.fillStyle = "#FFFFFF";
    context.fillText(`Score: ${score}/26`, 8, 20);
  }

function drawHealth () {
    context.font = "16px Arial";
    context.fillStyle = "#FFFFFF";
    context.fillText("Health: "+health, 550, 20);
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
                score+= 1;
                obstacles.splice(index,1)
            }
            if (obstacle.type === "pickpocket"){
                health -= 10;
                obstacles.splice(index,1)
            }
      }
}

function updateEverything () {
    context.clearRect(0, 0, width, height);
    backgroundImage.drawBackground();
    backgroundImage.moveBackground();
    loop();
    drawScore ();
    drawHealth ();
    
    obstaclesFrequency++;
    if (obstaclesFrequency % randomNum() === 1) {
        pickPocket();
    } else if (obstaclesFrequency % 100 === 1) { schengenFlag();
    }

    obstacles.forEach ((obstacle, index) => {
        obstacle.move();
        obstacle.drawSchengenFlag();
        obstacle.drawPickPocket();
        detectCollision(obstacle, index);
        if(health <= 0){
            gameOver();
        }
        if(score >= 26){
            gameWin();
        }
    });

    requestAnimationFrame(updateEverything);

    if (rectangle.x < 0) {
        cancelAnimationFrame(animationId);
        }
 
    }

// Screen swapping code

function gameOver() {
    cancelAnimationFrame(animationId);

    gameOverScreen.style.display="flex"
    splashScreen.style.display="none"
    gameScreen.style.display="none"
    winScreen.style.display="none"
}

function gameWin() {
    cancelAnimationFrame(animationId);

    winScreen.style.display="flex"
    gameOverScreen.style.display="none"
    splashScreen.style.display="none"
    gameScreen.style.display="none"
}

function startGame() {
    gameScreen.style.display="flex"
    gameOverScreen.style.display="none"
    splashScreen.style.display="none"
    winScreen.style.display="none"
    updateEverything();
}

function restart() {
    obstacles = [];
    score = 0;
    health = 100;
    animationId = 0;
    obstaclesFrequency = 0;
    rectangle.x_velocity = 0;
    rectangle.y_velocity = 0;
    startGame();
}

window.addEventListener('load', () => {    
    splashScreen.style.display = "flex"
    gameScreen.style.display = "none"
    gameOverScreen.style.display="none"
    winScreen.style.display ="none"

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
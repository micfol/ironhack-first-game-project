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
let flags = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];

var img1 = new Image()
img1.addEventListener('load', function (){
    obstacle.drawObstacle();
});
img1.src ="../img/austria.png";

var img2 = new Image();
img2.addEventListener('load', function (){})
img2.src ="../img/belgium.png"

var img3 = new Image();
img3.addEventListener('load', function (){})
img3.src ="../img/czechrepublic.png"

var img4 = new Image();
img4.addEventListener('load', function (){})
img4.src ="../img/denmark.png"

var img5 = new Image();
img5.addEventListener('load', function (){})
img5.src ="../img/estonia.png"

var img6 = new Image();
img6.addEventListener('load', function (){})
img6.src ="../img/finland.png"

var img7 = new Image();
img7.addEventListener('load', function (){})
img7.src ="../img/france.png"

var img8 = new Image();
img8.addEventListener('load', function (){})
img8.src ="../img/germany.png"

var img9 = new Image();
img9.addEventListener('load', function (){})
img9.src ="../img/greece.png"

var img10 = new Image();
img10.addEventListener('load', function (){})
img10.src ="../img/hungary.png"

var img11 = new Image();
img11.addEventListener('load', function (){})
img11.src ="../img/iceland.png"

var img12 = new Image();
img12.addEventListener('load', function (){})
img12.src ="../img/italy.png"

var img13 = new Image();
img13.addEventListener('load', function (){})
img13.src ="../img/latvia.png"

var img14 = new Image();
img14.addEventListener('load', function (){})
img14.src ="../img/liechtenstein.png"

var img15 = new Image();
img15.addEventListener('load', function (){})
img15.src ="../img/lithuania.png"

var img16 = new Image();
img16.addEventListener('load', function (){})
img16.src ="../img/luxembourg.png"

var img17 = new Image();
img17.addEventListener('load', function (){})
img17.src ="../img/malta.png"

var img18 = new Image();
img18.addEventListener('load', function (){})
img18.src ="../img/netherlands.png"

var img19 = new Image();
img19.addEventListener('load', function (){})
img19.src ="../img/norway.png"

var img20 = new Image();
img20.addEventListener('load', function (){})
img20.src ="../img/poland.png"

var img21 = new Image();
img21.addEventListener('load', function (){})
img21.src ="../img/portugal.png"

var img22 = new Image();
img22.addEventListener('load', function (){})
img22.src ="../img/slovakia.png"

var img23 = new Image();
img23.addEventListener('load', function (){})
img23.src ="../img/slovenia.png"

var img24 = new Image();
img24.addEventListener('load', function (){})
img24.src ="../img/spain.png"

var img25 = new Image();
img25.addEventListener('load', function (){})
img25.src ="../img/sweden.png"

var img26 = new Image();
img26.addEventListener('load', function (){})
img26.src ="../img/switzerland.png"


function randomFlag () {
    return flags[Math.floor(Math.random() * flags.length)]
}

function randomNum () {
    return Math.floor(Math.random() * 164) +40;
}

function pickPocket () {
    let newObstacle = new Obstacle(canvas.width, 285, 30, 65, "green", "pickpocket");
    obstacles.push(newObstacle);
}

function schengenFlag () {
    let randomY = Math.floor(Math.random() * 185) + 20;
    let flagObstacle = new Obstacle(canvas.width, randomY, 50, 30, randomFlag(), "flag");
    obstacles.push(flagObstacle);
}

function drawScore () {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
    context.fillText(`Score: ${score}/26`, 8, 20);
  }

function drawHealth () {
    context.font = "16px Arial";
    context.fillStyle = "#0095DD";
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
            if(obstacle.type === "flag"){
                score+= 1;
                obstacles.splice(index,1)
            }
            if(obstacle.type === "pickpocket"){
                health -= 10;
                obstacles.splice(index,1)
            }
      }
}

function updateEverything () {
    // rectangle.clearCanvas();
    // rectangle.drawPlayer();
    drawScore ();
    drawHealth ();
    // backgroundImage.drawBackground();
    // backgroundImage.moveBackground();
    obstaclesFrequency++;
    if (obstaclesFrequency % randomNum () === 1) {
        pickPocket ();
    } else if (obstaclesFrequency % 100 === 1) { schengenFlag ();
    }

    obstacles.forEach ((obstacle,index) => {
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
        cancelAnimationFrame (animationId);
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






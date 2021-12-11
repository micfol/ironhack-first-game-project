
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

rectangle = {
    x: 75,
    y: 0,
    height: 32,
    width: 32,
    jumping: true,
    x_velocity: 0,
    y_velocity: 0, 
}

controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event) {
      var key_state = event.type == "keydown" ? true : false;
  
      switch (event.keyCode) {
        case 37: // left key
          controller.left = key_state;
          break;
        case 38: // up key
          controller.up = key_state;
          break;
        case 39: // right key
          controller.right = key_state;
          break;
      }
    }
  };
  
  loop = function () {
    if (controller.up && rectangle.jumping == false) {
      rectangle.y_velocity -= 52;
      rectangle.jumping = true;
    }
  
    if (controller.left && rectangle.x > 85) {
      rectangle.x_velocity -= 0.7;
    }
  
    if (controller.right && rectangle.x < 770) {
      rectangle.x_velocity += 0.7;
    }
  
    rectangle.y_velocity += 1.5; // gravity
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9; // friction
    rectangle.y_velocity *= 0.9; // friction
  
    // if rectangle is falling below floor line
    if (rectangle.y > 380 - 16 - 32) {
      rectangle.jumping = false;
      rectangle.y = 380 - 16 - 32;
      rectangle.y_velocity = 0;
    }
    
    context.fillStyle = "#202020";
    context.fillRect(0, 0, canvas.width, canvas.height); 
    // x, y, width, height
    context.fillStyle = "#ff0000"; // hex for red
    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 375);
    context.lineTo(900, 375);
    context.stroke();
  
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
  };
  
  window.addEventListener("keydown", controller.keyListener);
  window.addEventListener("keyup", controller.keyListener);
  window.requestAnimationFrame(loop);





//   function updateAll() {
//     player.draw();
//     requestAnimationFrame(updateAll);
//   }

//   function gameOver () {

//   }

//   function youWin () {
      
//   }
  
//   function loop() {
//     if (player.jumping) {
//     }
//   }


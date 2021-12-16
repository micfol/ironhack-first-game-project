rectangle = {
    x: 75,
    y: 0,
    height: 65,
    width: 35,
    jumping: true,
    x_velocity: 0,
    y_velocity: 0, 
}

var playerImgRight = new Image();
playerImgRight.src = "./img/rightSprite.png";
var playerImgLeft = new Image();
playerImgLeft.src = "./img/leftSprite.png";
var playerImgFront = new Image();
playerImgFront.src = "./img/frontSprite.png";
var playerImgBack = new Image();
playerImgBack.src = "./img/backSprite.png"

controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event) {
      var key_state = event.type == "keydown" ? true : false;
  
      switch (event.keyCode) {
        case 37: 
          controller.left = key_state;
          break;
        case 38:
          controller.up = key_state;
          break;
        case 39: 
          controller.right = key_state;
          break;
      }
    }
  };
  
function playerImgDirection () {
    if (controller.left === true) {
    return playerImgLeft;
    } else if (controller.right === true) {
        return playerImgRight;
    } else if (controller.up === true) {
        return playerImgBack;
    } else return playerImgFront;
}

loop = function () {
    if (controller.up && rectangle.jumping == false) {
      rectangle.y_velocity -= 50;
      rectangle.jumping = true;
    }
  
    if (controller.left && rectangle.x > 85) {
      rectangle.x_velocity -= 0.7;
    }
  
    if (controller.right && rectangle.x < 530) {
      rectangle.x_velocity += 0.7;
    }
  
    rectangle.y_velocity += 1.5;
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9; 
    rectangle.y_velocity *= 0.9; 
  
    if (rectangle.y > 335 - 16 - 32) {
      rectangle.jumping = false;
      rectangle.y = 335 - 16 - 32;
      rectangle.y_velocity = 0;
    }

    context.drawImage(playerImgDirection(), rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 350);
    context.lineTo(640, 350);
    context.stroke();
};
  

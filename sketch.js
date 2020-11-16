var fixedRect, movingRect

function setup() {
  createCanvas(1600,1200);
  movingRect=createSprite(200,200,150,100);
  movingRect.shapeColor = "Red"
  movingRect.velocityX = 5
  fixedRect=createSprite(400, 200, 100, 150);
  fixedRect.shapeColor = "Red"
  fixedRect.velocityX = -5
}

function draw() {
  background(255,255,255);
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/
  
  result = isTouching(movingRect, fixedRect);
  bounceOff(movingRect, fixedRect);
  if(result) {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
      
    }
  else {
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }
  
  drawSprites();
}


var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 100);
  movingRect=createSprite(200, 200, 100, 100);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0);  
movingRect.y=mouseY;
movingRect.x=mouseX;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  

  drawSprites();
}
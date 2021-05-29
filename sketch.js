var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 table=createSprite(300,200,50,40);
 table.shapeColor=("brown")

 laptop=createSprite(250,400,120,50)
 laptop.shapeColor=("grey");
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if(isTouching(movingRect,laptop)){
  movingRect.shapeColor = "red";
  laptop.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  laptop.shapeColor = "grey";
}
  
  drawSprites();
}


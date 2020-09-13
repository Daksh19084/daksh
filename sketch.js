var fixedRect,movingrect,tana,lana;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  movingrect.velocityY = -5;
  fixedRect.velocityY = +5;
  tana=createSprite(200,400,20,30);
  tana.velocityX= 3
  lana=createSprite(400,400,20,30);
  lana.velocityX= -3
  tana.shapeColor='red'
  lana.shapeColor='red'
}

function draw() {
  background(0,0,0);  

  bounceoff(movingrect,fixedRect);
  bounceoff(tana,lana);
  drawSprites();   
   
}

var ground;
var player;
var g1, g2, g3, g4, g5, g6, g7, g8, g9, g0;
var prottec;

function setup() {
  createCanvas(1200,600);
 
  ground = createSprite(400,590,600,20);
  ground.shapeColor = ("yellow")
  player = createSprite(500, 560, 40, 40);
  player.shapeColor = ("red")
  prottec = createSprite(100, 300, 20, 600);
  prottec.shapeColor = ("yellow")
  g1 = createSprite(1000,610,600,20);
  g1.shapeColor = ("yellow");
  g2 = createSprite(1300, 500, 20, 240);
  g2.shapeColor = ("yellow")
  g3 = createSprite(1460, 390, 800, 20);
  g3.shapeColor =  ("yellow")
  g4 = createSprite(2500, 200, 800, 20);
  g4.shapeColor = ("yellow")
  g5 = createSprite(3500, 390, 800, 20);
  g5.shapeColor = ("yellow")
  g6 = createSprite(3900, 480, 20, 200);
  g6.shapeColor = ("yellow")
  g7 = createSprite(4290, 580, 800, 20);
  g7. shapeColor = ("yellow")
 
  
}

function draw() {
  background(215);  


  if(keyDown("up")){
    player.y = player.y -25;
  }
  if(keyDown("down")){
    player.y = player.y +25;
  }
  if(keyDown("right")){
    player.x = player.x +25;
  }
  if(keyDown("left")){
    player.x = player.x -25;
  }
  
  player.velocityY = player.velocityY + 0.6
  player.collide(ground);
  player.collide(g1);
  player.collide(g2);
  player.collide(g3);
  player.collide(g4);
  player.collide(g5);
  player.collide(g6);
  player.collide(g7);
  player.collide(prottec);
  

  camera.x = player.x 
  camera.y = player.y
  player.bounceiness = 0.12;

  

  drawSprites();
}
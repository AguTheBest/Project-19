var ghostimg1,ghost,ghost_running
var ghostimg2
var backgroundimg,background1
var obstacle
var obstacleimg1,obstacleimg2,obstaclesGroup
var gameoverimg,gameover
var score = 0
var gamestate = "play"




function preload(){
ghost_running = loadAnimation("ghost-standing.png","ghost-jumping.png")

obstacleimg1 = loadImage("obstacle1.png")
obstacleimg2 = loadImage("obstacle2.png")
ghostimg1 = loadImage("ghost-standing.png")
ghostimg2 = loadImage("ghost-jumping.png")
backgroundimg = loadImage("background.jpg")
gameoverimg = loadImage("gameover.png")
}

function setup() {
createCanvas(600,300)

invisibleGround = createSprite(555,290,600,10);
invisibleGround.visible = false;

background1 = createSprite(300,150)
background1.addImage("ground",backgroundimg)
background1.scale = 1.2

ghost = createSprite(500,180)
ghost.addAnimation("running",ghost_running)
ghost.scale = 0.4



obstaclesGroup = new Group()
}


function draw() {

background(0) 

if(gamestate === "play"){
 textSize(30)
 

gameover = createSprite(300,150)
gameover.addImage("gameover",gameoverimg)
gameover.visible = false

background1.velocityX = 5
if(background1.x > 360){
background1.x = 300
}

if(keyDown("space") && ghost.y >= 120) {
    ghost.velocityY = -14;
  }
  
  ghost.velocityY = ghost.velocityY + 0.8
  ghost.collide(invisibleGround);

  function spawnObstacles1(){
    if(frameCount % 120 === 0){ 
        obstacle = createSprite(10,260)
        obstacle.addImage("obstacle",obstacleimg1)
        obstacle.scale = 0.5
        obstacle.velocityX = 4
        obstacle.lifetime = 650
        obstaclesGroup.add(obstacle)
  }
}

spawnObstacles1()
}

if(ghost.collide(obstaclesGroup)){
 gamestate = "end"
}

if(gamestate === "end"){
background1.destroy()
ghost.destroy()
obstacle.destroy()
gameover = createSprite(300,150)
gameover.addImage("gameoverimage",gameoverimg)
}



  


drawSprites()    
}




















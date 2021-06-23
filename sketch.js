var npc,egypt,bg,run,player,obstacle
var obstaclesGroup

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg=loadImage("images/egypt-.jpg")
	npc=loadAnimation("images/npc.gif")
	run=loadAnimation("images/Running.gif")

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	obstaclesGroup=new Group()
	world = engine.world;
egypt=createSprite(400,130)
egypt.addImage(bg)
egypt.scale=3
	egypt.velocityX=-3
	player=createSprite(100,580)
	player.addAnimation("play",run)
	player.scale=0.3
	ground=createSprite(200,670,400,10)
	ground.visible=false
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites()
if(egypt.x<0){
	egypt.x=400
}
	spawnObstacles();
  if(keyDown("space")&&player.y>=400){
	  player.velocityY=-10
	
	
  }
	
	player.velocityY+=0.8
	player.collide(ground)
if (obstaclesGroup.isTouching(player)){
	obstaclesGroup.setVelocityXEach(0)
	obstaclesGroup.setLifetimeEach(-1)
	textSize(50)
	fill("green")
	stroke("black")
	strokeWeight(3)
	text("Game Over",300,350)
}

  Engine.update(engine);
}		
function spawnObstacles(){
	if(frameCount%200===0){
	
	
	obstacle=createSprite(800,Math.round(random(550,580)))
	obstacle.addAnimation("avc",npc)
	obstacle.scale=0.5

	obstacle.velocityX=-5
	obstacle.lifetime=160
	obstaclesGroup.add(obstacle)
	}

}
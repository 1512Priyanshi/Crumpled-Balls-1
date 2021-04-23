
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var left,bottom,right;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ball= new Ball(210,220,15,20);

	ground = new Ground(600,height,1200,20);

	left = new Dustbin(970,320,20,100);
	bottom = new Dustbin(900,380,160,20);
	right = new Dustbin(830,320,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0,0,0);

  ball.display();

  ground.display();
  
  left.display();
  bottom.display();
  right.display();

keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-25});
	}
}


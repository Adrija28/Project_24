
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400, 120);
	st1 = new Stone(350,380,70,70);

	Engine.run(engine);
  
}


function draw() {
  
  background("blue")
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  st1.display();

  drawSprites();
 
}




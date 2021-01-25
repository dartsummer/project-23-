const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,hammer;
function preload()
{
	
}

function setup() {
var  canvas = createCanvas(1200, 400);

	

stone1 = new Stone(180,130,70,70);
hammer1 = new Hammer(700,240,60,70);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
 
  hammer1.display();
  stone1.display();


//hammer1 = new Hammer(700,240,60,70);
// stone1 = new Stone(180,130,70,70);


  drawSprites();
 
}




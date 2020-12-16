
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

	//Create the Bodies Here.
	paper = new Paper(57,505,20);
	ground = new Ground(400,690,800,20);
	lrect = new Box(466,576,20,200);
	rrect = new Box(666,576,20,200);
	brect = new Box(565,674,200,20);

	Engine.run(engine);
  
}


function draw() {
	
  
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  paper.display();
  ground.display();
  lrect.display();
  rrect.display();
  brect.display();
  
  
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
		//to decrease force toward x direction reduce x:
	}
}




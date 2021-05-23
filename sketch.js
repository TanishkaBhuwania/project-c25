
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImg,dustbin

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	 
	//dustbin.addImage("dustbin",dustbinImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
    ground = new Ground(400,550,800,20);
	//ground1 = new Ground(400,500,800,20);

	dustbin1 = new Box(560,488,20,100);
	dustbin2 = new Box(630,528,110,20);
	dustbin3 = new Box(700,488,20,100);

	paperObject = new Paper(10,528,20,20);

	//ground1 = Bodies.rectangle(400,500,800,20);
	//World.add(world,ground1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

// dustbin = createSprite (400,150,10,10);
 //ground1 = createSprite (400,535,800,20)
 //ground1.invisibility = false
  
  //imageMode(CENTER);
//image();
  //dustbinImg.display(this.image, 630,528, 110,20);	
  ground.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display(this.image);
  
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50}); 
		} 
	}


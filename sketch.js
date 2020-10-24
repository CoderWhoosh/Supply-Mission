var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redZoneBottom,rzLeft,rzRight,rzbBody,rzlBody,rzrBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    redZoneBottom=createSprite(width/2,height-45,200,20);
	redZoneBottom.shapeColor = "red";
	rzLeft=createSprite(300,height-95,20,100);
	rzLeft.shapeColor = "red";
	rzRight=createSprite(500,height-95,20,100);
	rzRight.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rzbBody = Bodies.rectangle(width/2,height-45,200,20,{isStatic:true});
	World.add(world, rzbBody);
    rzlBody = Bodies.rectangle(300,height-95,20,100,{isStatic:true});
	World.add(world, rzlBody);
	rzrBody = Bodies.rectangle(500,height-95,20,100,{isStatic:true});
	World.add(world, rzrBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}




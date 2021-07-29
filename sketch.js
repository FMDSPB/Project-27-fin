
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 500, 50);
	bob1 = new Bob(210, 500, 50);
	bob2 = new Bob(310, 500, 50);
	bob3 = new Bob(410, 500, 50);
	bob4 = new Bob(510, 500, 50);
	bob5 = new Bob(610, 500, 50);

	rope1 = new Chain(bob1.body, {x:210, y:100});
	rope2 = new Chain(bob2.body, {x:310, y:100});
	rope3 = new Chain(bob3.body, {x:410, y:100});
	rope4 = new Chain(bob4.body, {x:510, y:100});
	rope5 = new Chain(bob5.body, {x:610, y:100});

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("Gray");
  
  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //console.log("hi")
 
}

function keyPressed() {

	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-800, y:0})

}
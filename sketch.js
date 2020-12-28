
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var roof1;
var rope1, rop2, rope3, rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Bob(250, 600);
	ball2 = new Bob(300, 600);
	ball3 = new Bob(350, 600);
	ball4 = new Bob(400, 600);
	ball5 = new Bob(450, 600);
	roof1 = new Roof();

    rope1 = new Rope(ball1.body, {x: 250, y: 200});
    rope2 = new Rope(ball2.body, {x: 300, y: 200});
    rope3 = new Rope(ball3.body, {x: 350, y: 200});
    rope4 = new Rope(ball4.body, {x: 400, y: 200});
    rope5 = new Rope(ball5.body, {x: 450, y: 200});
	
  
}


function draw() {
  background(255, 255, 255)
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

  function keyPressed(){
    if(keyCode === UP_ARROW){
 isStatic : false
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:2.7, y:-3.5}, { isStatic : false})
    }
  }





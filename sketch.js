const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  column1 = new Column(400,750,20,800)


  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  Engine.update(engine);

  column1.display();

  drawSprites();
}
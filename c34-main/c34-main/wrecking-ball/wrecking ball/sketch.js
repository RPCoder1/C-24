const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, rope, brick1, brick2, brick3

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(1000,800,1200,20)
brick1 = new Brick(1300,780,600,300)
brick2 = new Brick(1300,780,600,300)
brick3 = new Brick(1300,780,600,300)
ball = new Ball(800,200,100,100)
rope = new Rope(ball.body,{x:800,y:50})

}

function draw() {
  background("skyblue");
  Engine.update(engine);
 ground.display()
brick1.display()
brick2.display()
brick3.display()
ball.display()
rope.display()





}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
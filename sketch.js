const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
var box1,box2
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

box1=new box(200,300,50,50)
box2=new box(240,100,50,100)

 var opt={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,20,opt);
 World.add(world,ground)
 console.log(ground)

}
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
 
  box1.display()
  box2.display()
}
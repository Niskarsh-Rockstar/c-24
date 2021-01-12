const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld,myEngine;
var ground1,box1,box2,box3,box4,box5 ,pig1,bird1,log1,pig2,log2,log3,log4,box5
function setup() {
  createCanvas(1200,500);
  myEngine=Engine.create();
  myWorld=myEngine.world
 ground1=new ground(600,height,1200,20)
box1=new box(700,320,70,70)
box2=new box(920,320,70,70)
box3=new box(700,240,70,70)
box4=new box(920,240,70,70)
pig1=new pig(810,350,50,50)
pig2=new pig(810,220,50,50)
bird1=new bird(300,300,50,50);
log1=new log(810,260,300,PI/2)
log2=new log(810,180,300,PI/2)
log3=new log(760,120,150,PI/7)
log4=new log(870,120,150,-PI/7)
box5=new box(810,160,70,70)
// box3=new box(240,100,50,100)
// box4=new box(240,100,50,100)
console.log(box2.body.angle);
}

function draw() {
  background("Black");  
  Engine.update(myEngine);
  log1.display()
  bird1.display()
  pig1.display()
  ground1.display()
  box1.display()
  box2.display()
  pig2.display()
  box3.display()
  box4.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  
}
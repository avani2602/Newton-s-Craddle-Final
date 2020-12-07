const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var ground;
var base;
var box1,box2,box3,box4,box5,box6,box7;
var box8, box9,box10,box11,box12;
var box13, box14, box15;
var box16,box17;
var box18;
var ball;
var slingShot;
var bgImg;
var score = 0;
 
function preload()
{
  getBackGround();
}
 
function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,680,1200,50);
    base = new Ground(350,500,600,20);

    box1 = new Box(250,480,70,90);
    box2 = new Box(260,480,70,90);
    box3 = new Box(290,480,70,90);
    box4 = new Box(320,480,70,90);
    box5 = new Box(350,480,70,90);
    box6 = new Box(380,480,70,90);
    box7 = new Box(410,480,70,90);
    
    box8 = new Box(260,430,70,90);
    box9 = new Box(290,430,70,90);
    box10 = new Box(320,430,70,90);
    box11 = new Box(350,430,70,90);
    box12 = new Box(380,430,70,90);

    box13 = new Box(290,350,70,90);
    box14 = new Box(320,350,70,90);
    box15 = new Box(350,350,70,90);

    box16 = new Box(300,300,70,90);
    box17 = new Box(335,300,70,90);

    box18 = new Box(320,250,70,90);

    ball = new Ball(900,350,70,70);

    slingShot = new SlingShot(ball.body,{x:900, y:350});


 
}
 
 
function draw() {

  if(bgImg)
    background(bgImg);
  Engine.update(engine);

  ground.display();
  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball.display();
  textSize(35);
    fill("yellow")
    text("SCORE =" + score, width - 300, 50);
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}

 
async function getBackGround(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour >= 6 && hour < 19){
    bg = "bgDay.jpg";
} else{
    bg = "bgNight.jpg";
}
bgImg = loadImage(bg);
}

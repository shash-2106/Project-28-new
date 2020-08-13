
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var img;

function preload()
{
	img = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(150,550,50,10);
	boy.addImage(img);
	boy.scale = 0.12;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(600,400,200,500);
	Stone = new stone(100,500,35,35);
	Ground = new ground(400,650,800,50);
	mango1 = new Mango(575,200,35,35);
	mango2 = new Mango(600,270,45,45);
	mango3 = new Mango(640,230,35,35);
	mango4 = new Mango(670,280,35,35);
	mango5 = new Mango(660,330,45,45);
	mango6 = new Mango(570,360,35,35);
	mango7 = new Mango(620,385,35,35);
	mango8 = new Mango(550,300,45,45);

	string1 = new pull(Stone.body,{x:71, y:464});

	Engine.run(engine);
}

	
  



function draw() {
  rectMode(CENTER);
  background("cyan");
  Tree.display();
  Stone.display();
  Ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  string1.display();

  detectCollision(Stone,mango1);
  detectCollision(Stone,mango2);
  detectCollision(Stone,mango3);
  detectCollision(Stone,mango4);
  detectCollision(Stone,mango5);
  detectCollision(Stone,mango6);
  detectCollision(Stone,mango7);
  detectCollision(Stone,mango8);

  //console.log(mouseX);
  //console.log(mouseY);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string1.fly();
}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(Stone.body,{x:71,y:464})
		string1.attach(Stone.body);
	}
}
function detectCollision(lstone,lmango){
	stonePosition = lstone.body.position;
	mangoPosition = lmango.body.position;

	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
	if(distance<=lstone.width+lmango.width){
		Matter.Body.setStatic(lmango.body,false);
	}

}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var ground;
var stone;
var boy, boyimg;
var chain;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7;

function preload()
{
	boyimg = loadImage("boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(630,400);
	ground = new Ground(400, 690, 800, 20)
	stone = new Stone(100,680);
	chain = new SlingShot(stone.body, {x:134, y:580})
	mango1 = new Mango( 600, 380)
	mango2 = new Mango( 570, 200)
	mango3 = new Mango( 630, 240)
	mango4 = new Mango( 700, 300)
	mango5 = new Mango( 550, 350)
	mango6 = new Mango( 690, 320)
	mango7 = new Mango( 660, 280)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  image(boyimg, 180, 635, 150,250);
detectCollision(stone, mango1);
detectCollision(stone, mango2);
detectCollision(stone, mango3);
detectCollision(stone, mango4);
detectCollision(stone, mango5);
detectCollision(stone, mango6);
detectCollision(stone, mango7);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y: mouseY})
}
function mouseReleased(){
	chain.fly();
}

function detectCollision(st, mg){
	var stPosition = st.body.position;
	var mgPosition = mg.body.position;
	var distance = dist(stPosition.x, stPosition.y, mgPosition.x, mgPosition.y);
	if (distance <= st.r+mg.r){
		Matter.Body.setStatic(mg.body, false)
	}
	
}
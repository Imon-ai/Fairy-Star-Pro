var starImg, fairyImg, bgImg,starBodyImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
    starBodyImg = loadImage("images/star.png")
}

function setup() {
	createCanvas(800, 450);

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	star = createSprite(650,30,20,20);
	star.addImage("star",starImg);
	star.scale = 0.2;

	fairyVoice.loop();
}


 function draw() {
	background(bgImg);

	keyPressed();
  
	star.x= starBody.position.x 
	star.y= starBody.position.y 
  
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
 }
 
	 if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
 }

	console.log(star.y);
  
	if(star.y > 270 && starBody.position.y > 270 ){
		Matter.Body.setStatic(starBody,true);
	}
  
	drawSprites();
  
  }
 function keyPressed() {
  
	  if (keyCode === DOWN_ARROW||fairy.x > 470) {
		  Matter.Body.setStatic(starBody,false); 
		  fairy.x = 520;
	  }
  }
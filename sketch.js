var bg,sleep,bath,brush,eat,move,gym,drink,astronaut

function preload(){
  bg=loadImage("iss.png");
  bath=loadAnimation("bath2.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  drink=loadAnimation("drink1.png","drink2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move=loadAnimation("move.png","move1.png");

}
function setup() {
  createCanvas(600, 500);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("gyming",gym);
  astronaut.addAnimation("drinking",drink);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("moving",move);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20)
  fill("purple")
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20,70);
  text("Left Arrow = Eating",20,85);
  text("Right Arrow = Bathing",20,100);
  text("m key = Moving",20,115);

  edges= createEdgeSprite();
  astronaut.bounceOff(edges);

  if (keyDown("Up_Arrow")){
    astronaut. addAnimation("brushing",brush);
    astronaut .changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut. addAnimation("gymming",gym);
    astronaut .changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut. addAnimation("eat",eating);
    astronaut .changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0.5;
    astronaut.velocityY=0.5;
  }
 
  if (keyDown("RIGHT_ARROW")){
    astronaut. addAnimation("bath",bathing);
    astronaut .changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
if(keyDown("m")){
  astronaut. addAnimation("move",moveing);
    astronaut .changeAnimation("moveing");
    astronaut.velocityX=1;
    astronaut.velocityY=1;
}

} 
  



  
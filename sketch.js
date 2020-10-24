
var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
   bullet=createSprite(400, 200, 50, 50);
   wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,90);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  
}

function draw() {
  background("black");  
  wall.shapeColor="purple";



function hasCollided(bullet,wall) {
  bullet.rightedge=bullet.x+bullet.width
  wallleftedge=wall.x;
  if(bullet.rightedge=wall.leftedge){

   return true;
  }
  return false;
}
 if (hasCollided(bullet,wall)){
 bullet.velocityX=0;
 var damage=0.5*weight*speed*speed*(thickness*thickness*thickness);
 
 if (damage>10) {
   wall.shapeColor=color="green";
 }

 if (damage<10) {
  wall.shapeColor=color="red";
}
 }

 drawSprites();

 


}
  
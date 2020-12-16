var speed,weight;
var car;
var wall;
var thick;


function setup() {
  createCanvas(1600,400);
  car=createSprite(200, height/2, 20, 10);
  car.velocityX=speed;
  car.shapeColor="white";
  wall=createSprite(1200, 200, thick, height/2);
  thick=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(20); 
  if(collide(car,wall)){

   car.velocityX=0;
   var thick=0.5*car.velocityX*weight*car.velocityX/wall.width*wall.width*wall.width;
 
  if(thick>=10){
    car.shapeColor="red";
  }
   if(thick<10){
    car.shapeColor="green";
  
  
}
  }
if(collide(car,wall)){

}
  drawSprites();
}
function collide(oject1,object2){
 carright=oject1.x+oject1.width/2
 wallleft=object2.x-object2.width/2
 if(carright>=wallleft){
   return true
 }else{
   return false
 }

}
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1400,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;
  bullet.shapeColor=255;

  wall=createSprite(1200,200,thickness,height/2);


}

function draw() {
  background("orange");

  wall.shapecolor=color(80,80,80);

  Damage();

  isTouching(wall,bullet);

    //adjust the depth
    wall.depth = bullet.depth;
    bullet.depth = bullet.depth + 1;

  drawSprites();
}

function Damage(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;

   var Damage=0.5*bulletweight*bulletspeed*bulletspeed/(wall.thickness*wall.thickness*wall.thickness);

   if(damage>180){
   
    wall.shapeColor=color(255,0,0);

   }

   if(damage<100){

    wall.shapeColor=color(0,250,0);

   }
   
  }
}
function isTouching(bullet,wall){
    if(wall.x-bullet.x>=bullet.width/2+wall.width/2||
      bullet.x-wall.x>=bullet.width/2+wall.width/2||
      wall.y-bullet.y>=bullet.height/2+wall.height/2||
      bullet.y-wall.y>=bullet.height/2+wall.height/2){
      return false;
    }else{
      return true;
    }
  }
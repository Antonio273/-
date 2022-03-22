var animidle, animrun 

function preload(){

   animrun = loadAnimation("run.png", "run(2).png");
   animidle = loadAnimation("idle.png", "idle(2).png");

}

function setup() {
 var player = createSprite(200,200,50,50);
 player.addAnimation("idle", animidle);
 player.scale = 0.5;
}

function draw() {
 background(255);



 drawSprites();
}
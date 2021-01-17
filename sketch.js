const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var canvas,title,play,back,state=0,ground,hero;

function preload(){
  back=loadImage("img/1915699.jpg");
}
function setup(){
  canvas=createCanvas(displayWidth,700);

  engine=Engine.create();
  world=engine.world;
   
  play=createButton("Play");
  play.position(600,200);

  title=createElement("h1");
  title.html("The Steel Story");
  title.position(530,100);

  play.mousePressed(function(){
    play.hide();
    title.hide();
    state=1;
  });

  ground=Bodies.rectangle(600,580,displayWidth,10,{isStatic:true});
  World.add(world,ground);

  hero=new player(200,400);

  Engine.run(engine);
}
function draw(){
  Engine.update(engine);

  background(back);

  if(state===1){
    background(255,255,0);
    rect(0,ground.position.y,windowWidth,10);

    hero.show();
  }

  
}

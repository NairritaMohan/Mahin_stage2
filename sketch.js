var bg;
var player,player_img
var c02 =[];
var score = 0
var live = 20;
var o2=[]
var so2 = [];
var bg_pollution;

var endMessage;
var mode;


function preload(){
bg = loadImage("images/bg1.png");
player_sadimg = loadAnimation("images/e0.png","images/e1.png","images/e2.png","images/e3.png","images/e4.png")
player_happyimg = loadAnimation("images/he0.png","images/he1.png","images/he2.png")
bg_pollution  = loadImage("images/bg1.jpg")
}


function setup(){
mode = 0;
canvas = createCanvas(displayWidth-20,displayHeight-30);
textSize(22)
player = createSprite(200,400,50,50)
player.addAnimation("playersad",player_sadimg)
player.addAnimation("playerhappy",player_happyimg)
}

function draw(){
clear()
if(mode ===0){
background(bg_pollution)
text("EARTH SAVER GAME", 200,200)
text("Press Enter to start",300,300)
}

if(mode === 1){
background(bg);
player.display();

if(keyDown(LEFT_ARROW)){
player.velocityX = -3    
}

if(keyDown(RIGHT_ARROW)){
    player.velocityX = 3  
    }
    //so2 is starting ;;
if(frameCount % 100 === 0){
    gas = new Gas3(random(width),-10,110,120);
    //gases.push(gas)
   so2.push(gas)
}


    for(var i= 0;i<so2.length;i++){
      so2[i].display();
       so2[i].moveGas3(0,10);

     if(so2[i].hit3(player)){
     live = live-1
      so2.splice(i,1)
    }
   }
   //co2 is starting;;;
   if(frameCount % 150 === 0){
    gas2 = new Gas2(random(width),-10,110,120);
    c02.push(gas2)
}


   for(var j= 0;j<c02.length;j++){
       c02[j].display();
       c02[j].moveGas2(0,10)

       if(c02[j].hit2(player)){
       live = live - 1
       c02.splice(j,1)
    }
   }
   //o2 is starting;;;;
   if(frameCount % 30 === 0){
    gas3 = new Gas(random(width),-10,110,120);
    o2.push(gas3)
}


   for(var k= 0;k<o2.length;k++){
      o2[k].display();
    o2[k].moveGas(0,10)

       if(o2[k].hit(player)){
       // console.log("player")
       o2.splice(k,1);
       
       score = score + 1
    }
   }
   
   if(score===5|| score ===10 || score===15 || score ===20){
      player.changeAnimation("playerhappy",player_happyimg)
   }

   if(live === 10 || live===5){
      player.changeAnimation("playersad", player_sadimg)
   }

   

   fill(0);
   textSize(50)
text("Score : "+score,displayWidth/2-625,displayHeight/2-325);

fill(0)
textSize(50)
text("LIVE:" + live , displayWidth/2 + 500,displayHeight/2 - 325)
 
}
}

function keyPressed(){
   if(keyCode===ENTER){
      mode = 1
   }
}
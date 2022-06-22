
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bomba, bombaImg;
var caradobem,caradobemImg;
var campo;
var caradomal,caradomalImg ;
var campoImg;
var cara;
var gameState = 1;
var gameState = 2;
var gameState = 3;
let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(900,500);

}
function preload() {
bomba = loadImage("bomba.png");
  caradomal = loadImage("caradomal.png");
  caradobem = loadImage("caradobem.png");
 campo = loadImage("campo.png");

}




  
 function draw(){

background(campo);


if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(caradobem);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(caradomal);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(bomba);
  }

 }

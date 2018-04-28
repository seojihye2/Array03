var xPos= new Array(10);
var yPos= new Array(10);
var xDir= new Array(10);
var yDir= new Array(10);
var colorofellipse= new Array(10);

function setup() {
  createCanvas(400,300);
  background(0);
  
  for(var i=0; i<10;i++) {
    xPos[i] = random(15,385);
    yPos[i] = random(15,285);
    xDir[i] = random(10);
    yDir[i] = random(10);
  }
}

function draw() {
  background(0);
  
  for(var i=0; i<10; i++) {
    xPos[i]=xPos[i]+xDir[i];
    yPos[i]=yPos[i]+yDir[i];
  
    colorofellipse[i] = random(255);
  
    fill(100,100,colorofellipse[i]);
    ellipse(xPos[i],yPos[i],30,30);
  
    if(xPos[i]<15  || xPos[i]>width-15) {
      xDir[i]*=-1;
    }
    if(yPos[i]<15 || yPos[i]>height-15) {
      yDir[i]*=-1;
    }
  }  
}
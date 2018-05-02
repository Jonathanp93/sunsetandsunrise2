var yPos = 70;
var diam1 = 30;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,102); //an RGB color for the canvas' background
  //circle
  fill(255,255,255);
  ellipse(random(width),random(height),5,5);
  stroke(255,215,0); // an RGB color for the circle's border
  fill(255,215,0,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,yPos,85,85); // center of canvas, 20px dia
  fill(220,225,234);
  stroke(0,0,0);
  ellipse(mouseX,mouseY,diam1,diam1);
  fill(169,169,169);
  stroke(169,169,169);
  triangle(-50,500,300,500,150,150);
  triangle(225,500,550,500,350,150);
  yPos = yPos+1;
  fill(255,215,0,255);
  stroke(168,99,8);
  textSize(30);
  text('Sunset',25,50);
  fill(255,255,255);
  stroke(168,99,8);
  textSize(30);
  text('Moonrise',350,50);
  
   
    
  if(yPos > 500){
      yPos = 70;
  }
}

function mousePressed(){
  diam1 = diam1+5;
    if(diam1 > 100){
        diam1 = 30;
    }
  
}
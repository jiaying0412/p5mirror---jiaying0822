let speedX, speedY;
let x; 
let y; 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  GoodNight();
  moon();
  moonDetails();
  glow();
  mouth();
  drawStars();
  moveStars();
}

function GoodNight(){
  textSize(20);
  noStroke();
  fill(0);
  text("GOOD NIGHT  =_=",30, 60);
}

function moonDetails(){
  fill(129, 133, 137);
  rotate(PI/25);
  ellipse(width/2 + 15, height/2.5 - 130,15, 10);
  ellipse(width/2 + 35, height/2.5 - 104,7, 5);
  ellipse(width/2 + 50, height/2.5 - 106,10, 7);
  ellipse(width/2 - 42, height/2.5 - 95,16, 20);
  ellipse(width/2 - 10, height/2.5 - 115,27, 18);
  ellipse(width/2 - 15, height/2.5 + 35, 20,18);
  ellipse(width/2 + 8, height/2.5 + 47,15,10);
  ellipse(width/2 + 5, height/2.5 + 28,8, 8);
}

function moon(){
  //face
  noStroke();
  fill(225, 225, 225);
  circle(width/2, height/2.5,220);
  //eyes
  fill(0);
  textSize(27);
  text("=",width/2 - 25,height/2.5 - 55);
  text("=",width/2 + 52, height/2.5 - 55); 
}

function mouth(){
  let v = 35
  let xc = constrain(mouseX, 0, 300);
  let m = map (v,20,80,5,xc + 100);
  fill(0);
  circle(350,200,m);//mouth
}

function glow(){
  ellipseMode(CENTER);
  noFill();
  stroke(255);
  noStroke();
  
  drawingContext.shadowBlur = map(mouseX, 0, width, 0, 75);
  drawingContext.shadowColor = color(255);
  ellipse(width/2, height/2.5,200);
  ellipse(width/2, height/2.5,200);
  ellipse(width/2, height/2.5,200);
}

function drawStars(){
  noStroke();
  fill(251, 236, 93);
  x = random(0, width - 50);
  y = random(0, height - 50);
  x += speedX;
  y += speedY; 
  stars(x, y, 5, 20, 10);
}

function moveStars(){
  speedX = 0.1
  speedY = 0.1
  if (x < 0 || x > width - 50){
    speedX *= -1;
  }
  if (y < 0 || y > height - 50){
    speedY *= -1;
  }
}

function stars(x,y,n,outerRadius, innerRadius){
  let theta = TAU / n 
  beginShape();
  
  for (let i = 0; i < n; i++){
    vertex(x + cos(i * theta) * outerRadius, y + sin(i * theta) * outerRadius);
    vertex(x + cos((i + 0.5) * theta) * innerRadius, y + sin((i + 0.5) * theta) * innerRadius);
  } 
  
  endShape(CLOSE);
}
let thickness = 10;
let r= 0;
let g= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //thickness = random(130), only chooses the thickness once
}

function draw() {
  background(r,g,0);
  r= map(mouseX, 0, 700, 0, 255);
  g= map(mouseY,0, 700, 0, 255)
  //thickness = random(130); animation (function looping)
  //thickness = thickness+1; the stroke grows larger, slower
  strokeWeight(thickness);
  //thickness = map(mouseX,0,windowHeight,2,40)
  stroke(0,10,57);
  fill(0,225,0);
  circle(mouseX,mouseY,150);//x,y of center and width & height
  console.log(mouseX, mouseY)
  
}
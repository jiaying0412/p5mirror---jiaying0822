function preload(){
  myFont = loadFont('IndieFlower.ttf');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textFont(myFont);
  fill(255);
  textSize(32);
  text('SuPER ToFu',100,30);
  textSize(14);
  text('MINI WIKI',225,43);
  rect(100,150,150,120,12);
  fill(125,130,0);
  line(200,175,230,140)
}
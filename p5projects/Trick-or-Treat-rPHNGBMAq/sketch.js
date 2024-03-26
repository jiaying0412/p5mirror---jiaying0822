let Bg;
let startGame;

function preload(){
  Bg = loadImage('HalloweenBg.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startGame = false;
}

function draw() {
//spooky background
  image(Bg, 0,0);
//Question 
  textSize(25);
  textFont("Georgia");
  fill(255,195,0);
  text("WANNA GO TRICK-OR-TREATING?", width/7, height/3);
//yes button
  fill(255,195,0);
  rect(width/7 + 165,height/3 + 10, 75, 35, 8);
  fill(0);
  textSize(18);
  text("YES",width/7 + 185, height/3 + 35);
  
}

function mouseClicked() {
  //click yes
  if (width/7 + 165 < mouseX < width/7 + 240 && height/3 + 10 < mouseY < height/3 + 45){
    startGame = true;
  }
}
  
let song;
let songbutton;
let songPlaying = false;
let animation1Playing = false;

function preload(){
  stage = loadImage('JustDance.jpeg');
  myFont = loadFont('myFont.ttf')
  song = loadSound('WatchMe.mp3');
  animation1 = createVideo('Animation1.mov')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  songbutton = createButton ('Start');
  songbutton.mousePressed(playSong);
  songbutton.position(width/2,height/2 + 70);
}

function draw() {
 image(stage,0,0,width,height);
  textFont(myFont);
  textSize(24);
  text("Get ready to hit those moves!", width/3, height/2);    animation1.position(0,height/2)
  animation1.size(260,300)
}
function playSong(){
  if(songPlaying == false){
    song.play();
    songPlaying = true;
    songbutton.html('Start');
  }else{
    song.pause();
    songPlaying = false;
    songbutton.html('Paused')
  }
}

function playAnimation1(){
  if (animation1Playing == false){
    animation1.play();
    animation1Playing == true;
    
  }
}
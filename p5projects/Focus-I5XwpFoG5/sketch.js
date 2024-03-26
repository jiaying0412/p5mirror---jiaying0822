//reference for creating a countdown timer: https://www.youtube.com/watch?v=MLtAMg9_Svw (Coding Train)
//sounds downloaded from freesound.org

var timeleft = 1500; //timer set for 25 min
var startTime = 0;
var currentTime = 0;
let rain;
let nature; 
let fireplace;
let waves;
let jazz;
let vid;

let rainbutton;
let naturebutton;
let fireplacebutton;
let wavesbutton;
let jazzbutton;
let vidbutton;

let rainPlaying = false;
let naturePlaying = false; 
let fireplacePlaying = false;
let wavesPlaying = false;
let jazzPlaying = false;
let vidPlaying = false;

var alarm;

function preload(){
  rain = loadSound("rain.wav");
  nature = loadSound("nature.wav");
  fireplace = loadSound("fireplace.wav");
  waves = loadSound('Waves.wav');
  jazz = loadSound('Jazz.wav');
  vid = createVideo('Studying.mov');
  alarm = loadSound('alarm.wav');
}

function convertSeconds(s) {
  var min = floor(s/60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  rainbutton = createButton('Play Rain');
  rainbutton.mousePressed(playRain);
  rainbutton.position(10,80);
  rain.setVolume(0.25);
  naturebutton = createButton('Play Nature');
  naturebutton.mousePressed(playNature);
  naturebutton.position(10,120);
  fireplacebutton = createButton('Play Fireplace');
  fireplacebutton.mousePressed(playFireplace);
  fireplacebutton.position(10,160);
  wavesbutton = createButton('Play Waves');
  wavesbutton.mousePressed(playWaves);
  wavesbutton.position(10,200);
  waves.setVolume(0.7);
  jazzbutton = createButton('Play Jazz');
  jazzbutton.mousePressed(playJazz);
  jazzbutton.position(10,240);
  jazz.setVolume(0.25);
  vidbutton= createButton('START STUDYING');
  vidbutton.mousePressed(playStudy);
  vidbutton.position(50,15);
  
  vid.size (width,height);
  vid.position(0,51);
  
  startTime = millis();
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));
  
  var interval = setInterval(timeIt, 1000);
  
function timeIt(){
  if (vidPlaying == true){
    currentTime = floor((millis() - startTime)/1000);
    timer.html(convertSeconds(timeleft - currentTime));
  }
    if (currentTime == timeleft){
      alarm.play();
      clearInterval(interval);
    }
  }
}

function draw() {
  background(234, 221, 202);
}

function playRain(){
  if(rainPlaying == false){
    rain.loop();
    rainPlaying = true;
    rainbutton.html('Pause Rain');
  }else{
    rain.pause();
    rainPlaying = false;
    rainbutton.html('Play Rain');
  }
}

function playNature(){
  if(naturePlaying == false){
    nature.loop();
    naturePlaying = true;
    naturebutton.html('Pause Nature');
  }else{
    nature.pause();
    naturePlaying = false;
    naturebutton.html('Play Nature');
  }
}

function playFireplace(){
  if(fireplacePlaying == false){
    fireplace.loop();
    fireplacePlaying = true;
    fireplacebutton.html('Pause Fireplace');
  }else{
    fireplace.pause();
    fireplacePlaying = false;
    fireplacebutton.html('Play Fireplace');
  }
}

function playWaves(){
  if(wavesPlaying == false){
    waves.loop();
    wavesPlaying = true;
    wavesbutton.html('Pause Waves');
  }else{
    waves.pause();
    wavesPlaying = false;
    wavesbutton.html('Play Waves');
  }
} 

function playJazz(){
  if(jazzPlaying == false){
    jazz.loop();
    jazzPlaying = true;
    jazzbutton.html('Pause Jazz');
  }else{
    jazz.pause();
    jazzPlaying = false;
    jazzbutton.html('Play Jazz');
  }
}

function playStudy(){
  if (vidPlaying == false) {
    vid.loop();
    vidPlaying = true;
    console.log("START STUDYING!");
    vidbutton.html("PAUSE");
  } else if (vidPlaying == true) {
    vid.pause();
    vidPlaying = false;
    console.log("STUDY SESSION PAUSED!");
    vidbutton.html("CONTINUE STUDYING!");
  }
}
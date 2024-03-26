var timeleft = 240; //timer set for 4 min
var startTime = 0;
var currentTime = 0;

let trinketImgs = [];
let trinkets = [];
let star;
let begin;
let music;
let musicPlaying = false;
var alarm;
let score = 0;
let win;
let lose;
let winplaying = false;
let lostplaying = false;

function preload() {
  winterBG = loadImage("winterBackground.jpg");
  scene = loadImage("scene.jpg");
  //scene2 = loadImage("white.jpeg");
  for (let i = 0; i < 8; i++) {
    trinketImgs[i] = loadImage("object" + i + ".png");
  }
  music = loadSound("winterVibes2.m4a");
  alarm = loadSound("alarm.m4a");
  star = loadImage("star.png");
  myFont = loadFont("ChristmasFont.ttf");
}

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}

function setup() {
  createCanvas(1225, 680);
  background(255);
  frameRate(30);
  //create trinkets
  for (let i = 0; i < 8; i++) {
    let x = random(15, width-15);
    let y = random(30, height-15);
    let r = 15;
    let t = new Trinket(x, y, r);
    trinkets.push(t);
  }
  //win video
  win = createVideo("HappySanta.mov");
  win.size(600,500);
  win.loop();
  win.hide();
  
  //lose video
  lose = createVideo("GrinchBad.mov");
  lose.size(600,500);
  lose.loop();
  lose.hide();
  
  //background music
  music.setVolume(0.05);
  startTime = millis();
  var timer = select("#timer");
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);
  begin = createButton("START SEARCHING!");
  begin.mousePressed(startGame);
  begin.position(50, 15);

function timeIt() {
  if (musicPlaying == true) {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
  }
  if (currentTime == timeleft) {
    alarm.play();
    music.pause();
    clearInterval(interval);
  }
}
}

function draw() {
  image(winterBG,0,0,1225,680);
  textFont(myFont);
  textSize(25);
  text("Click on 'START SEARCHING!'",width/2 - 125 , height/4);
  text("and help me find the presents shown above", width/2 - 185, height/3 - 20);
    //draw header
  for (let i = 0; i < trinketImgs.length; i++) {
    image(trinketImgs[i], width - 50 - 80 * i, 10, 20, 20);
  }
  if (musicPlaying == true) {
    image(scene, 0, 50, width, height);
    for (let i = 0; i < trinkets.length; i++) {
      trinkets[i].show();
    }
  }

  fill(255, 0, 0);
  noStroke();
  text("score:", 30,30);
  textSize(30);
  text(score, 90, 35);
  text("/8",105,35);
  
  if (currentTime < timeleft) {
    if (score == 8) {
      background(255);
      let img = win.get();
      image(img,100,50);
      music.pause();
      text("Congratulations, you found all",720,200);
      text("of my hidden presents!",770,240);
    }
  }
  if (currentTime == timeleft) {
    if (score < 8) {
      background(255);
      let img = lose.get();
      image(img, 100, 50);
      music.pause();
      text("Game Over!", 720, 200);
      text("You have failed to find all the presents!", 720, 240);
    }  
  }
}


function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}

function startGame() {
  if (musicPlaying == false) {
    music.loop();
    musicPlaying = true;
  }
}

function mousePressed() {
  for (let i = 0; i < trinkets.length; i++) {
    trinkets[i].clicked(mouseX, mouseY);
  }
}

class Trinket {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.trinket = random(trinketImgs);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < 20) {
      console.log("Find One!");
      this.trinket = star;
      score += 1;
    }
  }

  show() {
    image(this.trinket, this.x, this.y, this.r, this.r);
  }
}

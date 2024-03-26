var timeleft = 120; //timer set for 2 min
var startTime = 0;
var currentTime = 0;

var caneCount = 0;
var gManCount;
let cane;
let cane2;

let gMan;
let gMan2;

let globe;
let globe2;

let gloves;
let gloves2;

let hotChoc;
let hotChoc2;

let skate;
let skate2;

let stocking;
let stocking2;

let ted;
let ted2;

let begin;
let music;
let musicPlaying = false;
var alarm;
let score = 0;

function preload() {
  scene = loadImage("scene.jpeg");
  // gloves = loadImage('gloves.png');
  //hotChoc = loadImage('hotChoc.png');
  music = loadSound("WinterVibes.m4a");
  alarm = loadSound("alarm.m4a");
}

function header() {
  cane0 = createImg("cane.png", "cane");
  cane0.position(300, 22);
  cane0.size(20, 20);
  gMan0 = createImg("gMan.png", "gMan");
  gMan0.position(420, 22);
  gMan0.size(20, 20);
  globe0 = createImg("globe.png", "globe");
  globe0.position(540, 22);
  globe0.size(20, 20);
  gloves0 = createImg("gloves.png", "gloves0");
  gloves0.position(660, 22);
  gloves0.size(20, 20);
  hotChoc0 = createImg("hotChoc.png", "hotChoc");
  hotChoc0.position(780, 22);
  hotChoc0.size(20, 20);
  skate0 = createImg("skate.png", "skate");
  skate0.position(900, 22);
  skate0.size(20, 20);
  stocking0 = createImg("stocking.png", "stocking");
  stocking0.position(1020, 22);
  stocking0.size(20, 20);
  ted0 = createImg("ted.png", "ted");
  ted0.position(1140, 22);
  ted0.size(20, 20);
}

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}

function setup() {
  createCanvas(1255, 680);
  background(scene);
  header();
  frameRate(30);
  place();
  //myImages();

  music.setVolume(0.1);
  startTime = millis();
  var timer = select("#timer");
  timer.html(convertSeconds(timeleft - currentTime));
  var interval = setInterval(timeIt, 1000);

  begin = createButton("START SEARCHING!");
  begin.mousePressed(startGame);
  begin.position(50, 15);
  startTime = millis();
  
}

function timeIt() {
  if (musicPlaying == true) {
    currentTime = floor((millis() - startTime) / 1000);
    //timer.html(convertSeconds(timeleft - currentTime));
  }
  if (currentTime == timeleft) {
    alarm.play();
    clearInterval(interval);
  }
}

function draw() {
  if (musicPlaying == true) {
    background(scene);
  }
  fill(255, 0, 0);
  noStroke();
  textSize(30);
  text(score, 30, 40);
}

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}

function place() {
  cane = createImg("cane.png", "cane1");
  cane.position(width / 7, height / 3 + 50);
  cane.size(15, 15);
  cane2 = createImg("cane.png", "cane2");
  cane2.position((2 * width) / 3 - 80, (2 * height) / 3 + 50);
  cane2.size(15, 15);

  gMan = createImg("gMan.png", "gMan");
  gMan.position(width / 3, (2 * height) / 3 + 50);
  gMan.size(25, 25);
  gMan2 = createImg("gMan.png", "gMan2");
  gMan2.position(64, height / 4 + 47);
  gMan2.size(25, 25);

  globe = createImg("globe.png", "globe");
  globe.position(width / 2 + 106, height / 3 + 140);
  globe.size(22, 22);
  globe2 = createImg("globe.png", "globe2");
  globe2.position(width / 3 - 15, height / 4 + 33);
  globe2.size(22, 22);

  gloves = createImg("gloves.png", "gloves");
  gloves.position((3 * width) / 4 + 85, height / 3 + 65);
  gloves.size(20, 20);

  gloves2 = createImg("gloves.png", "gloves2");
  gloves2.position(width / 2 - 6, (2 * height) / 3 + 77);
  gloves2.size(20, 20);

  hotChoc = createImg("hotChoc.png", "hotChoc");
  hotChoc.position(12, height + 25);
  hotChoc.size(22, 22);
  hotChoc2 = createImg("hotChoc.png", "hotChoc2");
  hotChoc2.position(width - 44, height / 2);
  hotChoc2.size(15, 15);

  skate = createImg("skate.png", "skate1");
  skate.position((3 * width) / 4, height / 2 + 50);
  skate.size(20, 20);
  skate2 = createImg("skate.png", "skate2");
  skate2.position(width / 2 - 10, height / 3 + 32);
  skate2.size(20, 20);

  stocking = createImg("stocking.png", "stocking");
  stocking.position(47, (2 * height) / 3 + 4);
  stocking.size(20, 20);
  stocking2 = createImg("stocking.png", "stocking2");
  stocking2.position((3 * width) / 4 + 29, 85);
  stocking2.size(20, 20);

  ted = createImg("ted.png", "ted1");
  ted.position(width / 3.5 - 41, height / 3 + 81);
  ted.size(22, 22);
  ted2 = createImg("ted.png", "ted2");
  ted2.position((2 * width) / 3 + 13, height / 3 + 84);
  ted2.size(18, 18);
}

function startGame() {
  if (musicPlaying == false) {
    music.play();
    musicPlaying = true;
  }
}

function mousePressed() {
  let a = dist(mouseX, mouseY, cane.x, cane.y);
  if (a < 50) {
    cane.hide();
    score += 1;
  }
  let b = dist(mouseX, mouseY, cane2.x, cane2.y);
  if (b < 50) {
    cane2.hide();
    score += 1;
  }
  let c = dist(mouseX, mouseY, gMan.x, gMan.y);
  if (c < 50) {
    gMan.hide();
    score += 1;
  }
  let d = dist(mouseX, mouseY, gMan2.x, gMan2.y);
  if (d < 50) {
    gMan2.hide();
    score += 1;
  }
  let e = dist(mouseX, mouseY, globe.x, globe.y);
  if (e < 50) {
    globe.hide();
    score += 1;
  }
  let f = dist(mouseX, mouseY, globe2.x, globe2.y);
  if (f < 50) {
    globe2.hide();
    score += 1;
  }

  let g = dist(mouseX, mouseY, gloves.x, gloves.y);
  if (g < 50) {
    gloves.hide();
    score += 1;
  }
  let h = dist(mouseX, mouseY, gloves2.x, gloves2.y);
  if (h < 50) {
    gloves2.hide();
    score += 1;
  }
  let i = dist(mouseX, mouseY, hotChoc.x, hotChoc.y);
  if (i < 50) {
    hotChoc.hide();
    score += 1;
  }

  let j = dist(mouseX, mouseY, hotChoc2.x, hotChoc2.y);
  if (j < 50) {
    hotChoc2.hide();
    score += 1;
  }
  let k = dist(mouseX, mouseY, skate.x, skate.y);
  if (k < 50) {
    skate.hide();
    score += 1;
  }
  let l = dist(mouseX, mouseY, skate2.x, skate2.y);
  if (l < 50) {
    skate2.hide();
    score += 1;
  }
  let m = dist(mouseX, mouseY, stocking.x, stocking.y);
  if (m < 50) {
    stocking.hide();
    score += 1;
  }
  let n = dist(mouseX, mouseY, stocking2.x, stocking2.y);
  if (n < 50) {
    stocking2.hide();
    score += 1;
  }
  let o = dist(mouseX, mouseY, ted.x, ted.y);
  if (o < 50) {
    ted.hide();
    score += 1;
  }
  let p = dist(mouseX, mouseY, ted2.x, ted2.y);
  if (p < 50) {
    ted2.hide();
    score += 1;
  }
}

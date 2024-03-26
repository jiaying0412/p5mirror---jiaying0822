// Creative Computing 2022-Oct-05 in class
// David Rios
// js object
// click to increase speed
// button to decrease speed
// event vs boolean
/// mouseispressed random background
/// self portrait function

let ballx = 500;
let bally = 100;
let speedx = 5;
let speedy = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(0, 255, 0);
  ellipse(ballx, bally, 50, 50);
  moveBall();
  bounceBall();
  //noCursor();
  // if (mouseIsPressed) {
  //   br = random(255);
  //   bg = random(255);
  //   bb = random(255);
  // }
}



function moveBall() {
  ballx = ballx + speedx; // update x location by using xspeed
  bally = bally + speedy; // update y location by using y speed
}

function bounceBall() {
  if (ballx >= width) {
    // change speed and direction if ball goes past width
    speedx = -5;
  }

  if (bally >= height) {
    // change speed and direction if ball goes past height
    speedy = -3;
  }

  if (ballx <= 0) {
    // change speed and direction if ball goes past 0
    speedx = 5;
  }

  if (bally <= 0) {
    // change speed and direction if ball goes past 0
    speedy = 3;
  }
}

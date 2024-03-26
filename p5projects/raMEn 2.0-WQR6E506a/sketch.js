
function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(173, 216, 230);//blue 
  angleMode(DEGREES);
  ellipse(300, 300,335, 375);//face shape
  fill(27, 18, 18);
  rect(275, 620,85,35);
  arc(315,425, 420,420,360, 180);//bowl
  line(105,425, 525,425);
  strokeWeight(28);
  strokeCap(SQUARE);
  line(110,470, 520,470);
  strokeWeight(3);
  fill(250, 128, 114);
  let v = 25
  let xc = constrain(mouseX, 0, 600);
  let m = map (v, 20, 50,25,xc/2);
  circle(300,380,m);//mouth
  strokeWeight(1.5);
  fill(5, 200, 135);
  ellipse(400, 338,30,28);//right cheek
  fill(2,250,132);
  ellipse(200, 340,28,30);//left cheek
  fill(255, 215, 177);
  ellipse(200, 340,20,18);//left cheek pt.2
  ellipse(400, 338,20,18);//right cheek pt.2
  strokeWeight(4);
  fill(210, 125, 45);
  translate(1,1);
  rotate(-4);
  rect(324, 237-xc/12,50,16,2);//right eyebrow
  rotate(10);
  rect(237, 174-xc/12,60,20,2);//left eyebrow
  strokeWeight(3);
  fill(255,255,255);
  rotate(-12);
  ellipse(217,300,67,75);//left eye
  rotate(22);
  ellipse(427,167,67,75);//right eye
  fill(255, 192, 0);
  circle(324, 200, 30);//right iris
  circle(424, 177, 32);//left iris
  fill(255,255,255);
  circle(325, 194, 7);//right pupil
  circle(419, 175, 9);//left pupil
  fill(255, 200, 152);
  arc(370, 224, 25, 25, 140, 10, OPEN);//nose
  
  //freckles
  stroke(204, 119, 34);
  strokeCap(ROUND);
  circle(287,246,1);
  circle(281,250,1);
  circle(333,248,1);
  circle(367,204,1);
  circle(406,215,1);
  circle(450,212,1);
  circle(463,201,1);
  stroke(227, 150, 62);
  circle(276,242,1);
  circle(349,223,1);
  circle(360,200,1);
  circle(435,225,1);
  circle(454,205,1);
  
  //hair
  noFill();
  strokeWeight(9);
  stroke(255, 192, 0);
  arc(390, 210, 435, 470, 123, 380);
  arc(380, 225, 415, 470, 123, 380);
  arc(370, 240, 395, 470, 123, 380);
  arc(360, 255, 375, 470, 123, 380);
  
  //chopsticks
  strokeWeight(15);
  stroke(160, 82, 45);
  let nxc = constrain(mouseX, 120, 460);
  line(nxc+8,80,535,2);
  line(nxc,60,512,-52);
  
  fill(255, 215, 177);//face color
  strokeWeight(5);
  stroke(255, 102, 0);
  
}

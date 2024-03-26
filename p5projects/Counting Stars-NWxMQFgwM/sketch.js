let tick = 0,
    stars = [];
//let randx = random(width);
//let randy = random(height);

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  for (let i = 0; i < 6; i++) {
    
    stars[i] = new Star(random(width), random(height));
  
  }
}

function draw() {
  background(10,10,68);
  GoodNight();
  
  glow();
  if (tick % 8 === 0) {
    stars.push(new Star());
  }
  
  let removes = [];
  for (let i = 0; i < stars.length; i++){
    let star = stars[i];
    star.update();
    if (star.y > height){
      removes.push(i);
    }
  }
  
  removes
  .sort((a,b) => b - a)
  .forEach((idx) => {
    stars.splice(idx,1);
  });
  tick++;
  moon();
}

function GoodNight(){
  textSize(20);
  noStroke();
  fill(0);
  text("GOOD NIGHT  =_=",width - 200, 40);
}

function moon(){
  //face
  noStroke();
  fill(255);
  circle(40, 30,180); 
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

function mousePressed() {
  stars.push( new Star(mouseX,mouseY)  );
}

class Star {
  constructor(x,y) {
    this.x = x//map(random(), 0, 1, 0, width);
    this.y = y//-50;
    this.time = 1;
    this.random = map(random(), 0, 1, -5, 5); // Adding some random spin to the stars.
    this.angle = 0;
    this.acceleration =
      Math.floor(Math.abs(this.random)) !== 0 ? this.random : 1; // Acceleration is > 0;
    this.color1 = color(255, 248, 166);
    this.color2 = color(250, 250, 250);
    this.color = lerpColor(this.color1, this.color2, random()); // Randomize star color.
    this.filled = random() > 0.5 ? true : false;
  }

  create(cx, cy) {
    strokeWeight(6);
    stroke(this.color);
    if (this.filled) {
      fill(this.color);
    } else {
      noFill();
    }
    strokeJoin(ROUND);

    // Star shape code from https://stackoverflow.com/a/25840319
    let rot = (PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = PI / 5;
    let outerRadius = 40;
    let innerRadius = 20;

    beginShape();
    for (let i = 0; i < 5; i++) {
      x = cx + cos(rot) * outerRadius;
      y = cy + sin(rot) * outerRadius;
      vertex(x, y);
      rot += step;

      x = cx + cos(rot) * innerRadius;
      y = cy + sin(rot) * innerRadius;
      vertex(x, y);
      rot += step;
    }
    vertex(x, y);
    endShape(CLOSE);
  }

  update() {
    push();
    angleMode(DEGREES);
    translate(this.x,this.y);
    rotate(this.angle);
    scale(noise(this.time * 0.01)); // Scale the stars to make them twinkle!
    angleMode(RADIANS);
    this.create(0,0 );
    this.y += this.time * 0.01;
    this.time += Math.abs(this.acceleration);
    this.angle += this.acceleration;
    pop();
  }
}

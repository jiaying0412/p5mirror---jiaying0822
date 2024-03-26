let boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 4; i++){
    boxes[i] = new Box(100,200,50);
  }
  
  
}

function draw() {
  background(255);
  boxes[0].show();
}

class Box{
  
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.s = s;
  }
  
  show(){
    fill(255,0,0);
    rect(this.x,this.y,this.s,this.s);
  }
}
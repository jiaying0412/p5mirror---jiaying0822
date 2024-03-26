//change text size and font, spacing
var button;
var textbox;
var directions;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textbox = createInput('tofu');
  textbox.position(20,65);
  button = createButton('submit');
  button.position(textbox.x + textbox.width, 65);
  button.mousePressed(updateList);
  
}

function draw() {
  background(255);
  text('a',2*width/15,height/25);
  text('b',3*width/15,height/25);
  text('d',4*width/15,height/25);
  text('f',5*width/15,height/25);
  text('h',6*width/15,height/25);
  text('i',7*width/15,height/25);
  text('k',8*width/15,height/25);
  text('o',9*width/15,height/25);
  text('p',10*width/15,height/25);
  text('t',11*width/15,height/25);
  text('u',12*width/15,height/25);
  text('w',13*width/15,height/25);
  
}

function updateList() {
  print(textbox.value());
  
}

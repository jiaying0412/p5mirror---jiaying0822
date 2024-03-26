function preload(){
  topSecret = loadImage('top-secret.png');
  pen = loadImage('pen.png');
  hide = loadImage('hide.png');
  flashlight = loadImage('flashlight.png');
  sent = loadImage('save.png');
}

function setup() {
  createCanvas(1280, 675);
  background(245, 222, 179);
  grid();
  var reset = createButton("Create New");
  reset.position(20,68);  
  reset.mousePressed(resetSketch);
  var pen = createButton("Draw");
  pen.position(40,165);
  pen.mousePressed(customCursor);
  var hide = createButton("Hide");
  hide.position(40, 235);
  var reveal = createButton("Reveal");
  reveal.position(32,335);
  var sent = createButton("Save");
  sent.position(40,425);
  sent.mousePressed(finishSketch);
}

function resetSketch(){
  var cols = 111;
  var rows = 60;
  translate(125, 0);
  for (var i = 0; i < cols; i ++){
    for(var j = 0; j < rows; j ++){
      var x = i * 10
      var y = j * 10
      stroke (0);
      fill(255, 245, 238);
      rect(x, y,10,10);
    }
  }
}

function draw() {
  startSketch();
  tools();
}

function tools(){
  translate(5, 40)
  image(topSecret,28,57,57,60);
  image(pen,30,150,45,45);
  image(hide,30,225, 65, 65);
  image(flashlight,25, 320, 65, 60);
  image(sent,15, 394, 70, 80);
}

function startSketch(){
  if (mouseX == 42 || mouseIsPressed){
    fill(0);
    rect(mouseX,mouseY, 10,10);
  }
}

function customCursor() {
  if (mouseIsPressed){
    image(pen, mouseX, mouseY, 25, 25);
  }
}

function finishSketch(){
  saveCanvas('Invisible Message', 'png');
}

function grid(){
  var cols = 111;
  var rows = 60;
  translate(130, 40);
  for (var i = 0; i < cols; i ++){
    for(var j = 0; j < rows; j ++){
      var x = i * 10
      var y = j * 10
      stroke (0);
      fill(255, 245, 238);
      rect(x, y,10,10);
    }
  }
}

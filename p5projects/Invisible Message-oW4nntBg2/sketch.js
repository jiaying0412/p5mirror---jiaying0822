// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();

// HTML button object:
let portButton;
let inData; // for incoming serial data
let outData; // for outgoing data

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
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  // if serial is available, add connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
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

/////////////////////////////
// SEND AND RECEIVE DATA  ///
/////////////////////////////
  
function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  let inString = serial.readStringUntil("\r\n");

  if (inString) {
    // console.log(inString);

    let sensors = split(inString, ",");

    // console.log(sensors);

    // you can wrap the below into int() to get integer values for each
    mouseX = map(sensors[0], 0, 1023, 0, width);
    mouseY = map(sensors[1], 0, 1023, 0, height);
  }
}
    
////////////////////////////////////////////
// UTILITY FUNCTIONS TO MAKE CONNECTION  ///
////////////////////////////////////////////
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}

// make the port selector window appear:
function choosePort() {
  serial.requestPort();
}

// open the selected port, and make the port
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  serial.open().then(initiateSerial);

  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
    serial.write("x");
  }
  // hide the port button once a port is chosen:
  if (portButton) portButton.hide();
}

// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}

// try to connect if a new serial port
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}

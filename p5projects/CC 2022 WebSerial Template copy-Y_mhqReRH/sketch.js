/*
Serial Library:
https://github.com/yoonbuck/p5.WebSerial/wiki/Guide

Serial handshaking and multi-value strings using p5.webserial. Sends an 'x' out the serial port on port opening, then waits for serial to come in. Expects a Comma Separated Value string. Separates it into three parts, then sends an 'x' to request another string from the sender.
created 31 May 2022
modified 11 Jun 2022
by Tom Igoe
modified 09 Oct 2022
by David Rios
*/

// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();

// HTML button object:
let portButton;
let inData; // for incoming serial data
let outData; // for outgoing data
// variables for the circle to be drawn:
let ball = {x:50, y:50};

//variable for background to change
let bg=0;
let angle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight); // make the canvas
  // check to see if serial is available:
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

////////////
// DRAW  ///
////////////
function draw() {
 
  background(bg); // black background
  fill(255,255,0); // fill depends on the button
  ellipse(ball.x, ball.y, 50, 50); // draw the circle
  
  angle = int(map(mouseY,0, height,179, 0));
  
  fill (255, 255, 0);
  text("background color: " + bg, 10,40);
  text("ball x: " + ball.x, 10, 90);
  text ("ball y: " + ball.y, 10, 150);
  text("angle: " + angle, 10, 180);

}

/////////////////////////////
// SEND AND RECEIVE DATA  ///
/////////////////////////////

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  let inString = serial.readStringUntil("\r\n");
  //check to see that there's actually a string there:
  
  //check to see that there's actually a string there
  
  if (inString){
    
    //console.log(inString);
    
    let sensors = split(inString, ",");
    
    //console.log(sensors);
    
    ball.x= int(map(sensors[0], 0, 1023, 0, width));
    ball.y= int(map(sensors[1], 0, 1023, 0, height));
    bg= int(map(sensors[2], 0, 1023, 0, 255));
    
    //serial.write("x");
    serial.write(angle);
    
  }
  
//    let sensors = split(inString , "," );
//    locH = int(map(sensors[0], 0,1023, 0, width));
//    locV = int(map(sensors[1], 0, 1023,0, height));
//    bg = int(map(sensors[2], 0, 1023,0,255));
//    serial.write("x"); 
//  }
}


////////////////////////////////////////////
// UTILITY FUNCTIONS TO MAKE CONNECTION  ///
////////////////////////////////////////////

// if there's no port selected,
// make a port select button appear:
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


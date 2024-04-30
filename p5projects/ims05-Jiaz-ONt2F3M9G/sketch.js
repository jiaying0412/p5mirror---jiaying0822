// https://editor.p5js.org/jiaying0822/sketches/ONt2F3M9G
// ims05-Jiaz

// trying to create a scratch-off effect for images 

let img; // Variable to store the image
let topLayer; // layer that goes on top of the image
let hasDragged = false;
let hidden = false;
let displayText = ""; // Variable to store journal text
let showInstructions = false; 


function preload() {
  img = loadImage('testImage.jpg'); // Load your image here
}

function setup() {
  createCanvas(400, 540);
  background(0);
  
  topLayer = createGraphics(width, height); 
  topLayer.background(0);

  // adjust the stroke, more of a brush effect
  topLayer.strokeWeight(10); // how much we are scratching off 
  topLayer.blendMode(REMOVE); // tells p5 we are removing the color
  
//** for the actual final, the entry is going to appear before this part
  
  // Create text area for journal entry
  entry = createElement('textarea', 'The story behind this image...');
  entry.value('The story behind this image...')
  entry.style('font-family', 'Gaegu');
  entry.style('font-size', '18px');
  entry.style('color', 'white');
  entry.style('background-color', '#333'); 
  entry.style('width', '390px');
  entry.style('border-radius', '5px'); 
  entry.style('height', '50px');
  entry.style('resize', 'none');
  entry.style('padding', '5px');
  entry.position(0, height + 5);
  
  // Create button to submit entry
  btn = createButton('submit');
  btn.position(entry.position().x + 343, entry.position().y + 68);
  btn.style('font-family','Gaegu');
  btn.style('font-size', '16px');
  
  // Add an event listener to the button
  btn.mousePressed(hideElements);
}

function draw() {
  if (hasDragged == true) {
    image(img, 0, 0, width, height);
    image(topLayer,0, 0); // draw the layer onto the screen
  }
  if (hidden) {
    textFont('Gaegu');
    fill(255);
    noStroke();
    textSize(18);
    text(displayText, 10, height/2, 380, height); // Ensure text fits within canvas
  }
   if (showInstructions) {
    fill(255);
    noStroke();
    textSize(18);
    textFont('Gaegu');
    text("Hold & drag mouse to reveal the memory...", 10, 30);
  }
  
} 

function mousePressed(){
  if (mouseX < 400 && mouseY < 540 && hidden == true) {
    showInstructions = true; // Show the instructions when mouse is pressed
    hidden = false;
    // Create button to save scratchoff
    sve = createButton('save');
    sve.position(355,545);
    sve.style('font-family','Gaegu');
    sve.style('font-size', '16px');

    // Add an event listener to the button
    sve.mousePressed(saveScratchOff);
  }
}

function mouseDragged() {
  setTimeout(hideInstructions, 10000); // instructions should disappear after 10 seconds after user starts drags

  // Set hasDragged to true as the user drags
  hasDragged = true;
  // reveal the image beneath the top layer
  topLayer.line(pmouseX,pmouseY,mouseX,mouseY);
}

function hideElements() {
  hidden = true;
  showInstructions = false; // Stop showing the instructions
  displayText = entry.value();
  entry.hide();  // Hide the textarea
  btn.hide(); // Hide the button
}

function hideInstructions(){
  showInstructions = false;
}

function saveScratchOff(){
  save('ScratchOff.png'); 
}

// if the user clicks on the arrow that flips the card/reveals the journal they wrote for this journal and then flip back, the image will be colored, arrow will appear after they dragged and like 5 seconds maybe

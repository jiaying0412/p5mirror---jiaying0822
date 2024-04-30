// https://editor.p5js.org/jiaying0822/sketchescrejBf64
// ims06-Jiaz

let capture;
let newPic; 
let images = []; // array to store the captured images

function setup() {
  textFont('Gaegu');
  createCanvas(windowWidth, windowHeight);  // Set the size of the canvas
  capture = createCapture(VIDEO);  // Start capturing video
  capture.size(280, 380);  // Set the size of the capture
  capture.hide();  // Hide the HTML element to use the canvas for rendering
  
  // Create button to take picture
  snap = createButton('snap 📸');
  snap.position(10, 510);
  snap.style('font-family','Gaegu');
  snap.style('font-size', '16px');
  snap.mousePressed(takePic); 
  
  // Create button to play video
  play = createButton('play ▶️');
  play.position(85, 510);
  play.style('font-family', 'Gaegu');
  play.style('font-size', '16px');
  play.mousePressed(playVideo);
  
  // Create button to delete picture
  del = createButton('delete 🗑️');
  del.position(157, 510);
  del.style('font-family', 'Gaegu');
  del.style('font-size', '16px');
  del.mousePressed(deletePic); 
  
  // Create text area for journal entry
  entry = createElement('textarea', 'The story behind this image...');
  entry.style('font-family', 'Gaegu');
  entry.style('font-size', '18px');
  entry.style('background-color', 'white'); 
  entry.style('width', '390px');
  entry.style('border-radius', '5px'); 
  entry.style('height', '90px');
  entry.style('resize', 'none');
  entry.style('padding', '5px');
  entry.position(325, 10);
  
}

function draw() {
  background('white')
  // Clear the specific area where the text is displayed
  // Use the background color to fill a rectangle that covers the old text
  fill('#feeb75');  // Use the background color
  noStroke();
  rect(325, 130, 400, 30);  // Adjust size to fully cover the text area

  // Draw the video frame and the UI
  rect(10, 10, 304, 490, 5, 5, 5, 5);
  image(capture, 27, 45, 270, 380);

  let offsetX = 325, offsetY = 170;  // Starting position for the first image
  let imgWidth = 180, imgHeight = 253;  // Size of each image
  let margin = 10;  // Margin between images

  for (let i = 0; i < images.length; i++) {
    let x = offsetX + (i % 5) * (imgWidth + margin);  // Position for each image
    let y = offsetY + Math.floor(i / 5) * (imgHeight + margin);
    image(images[i], x, y, imgWidth, imgHeight);
  }

  // Redraw the text
  fill(0);  // Text color
  textSize(18);
  text(`Access your past memories below (${images.length}/10)`, 330, 150);
}

function takePic() {
  // newPic = capture.get(); 
  if (images.length < 10) {  // Only allow up to 10 images
    images.push(capture.get());  // Add the new image to the array
  }
}

function playVideo() {
  
}

function deletePic() {
  if (images.length > 0) {
    // Calculate the position of the last image
    let i = images.length - 1;
    let offsetX = 325, offsetY = 170;
    let imgWidth = 180, imgHeight = 253;
    let margin = 10;
    let x = offsetX + (i % 5) * (imgWidth + margin);
    let y = offsetY + Math.floor(i / 5) * (imgHeight + margin);

    // Cover the last image with a rectangle
    fill('white');  // Background color
    noStroke();
    rect(x, y, imgWidth, imgHeight);

    // Remove the last image from the array
    images.pop();
  }
}

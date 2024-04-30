let img, topLayer;
let yRotation = 0;
let isFlipping = false;
let flipDirection = 1; // 1 for forward, -1 for backward

function setup() {
  createCanvas(400, 540, WEBGL);
  img = loadImage('himawari.png'); // Ensure you load your image here
  topLayer = createGraphics(width, height);
  topLayer.background(0);
  topLayer.fill(255); // Example content on topLayer
  topLayer.text('Secret Text', 50, 50);
  angleMode(DEGREES); // Working with degrees is easier for rotations
  
  // Your existing setup code
  let btn = createButton('submit');
  btn.mousePressed(() => {
    if (!isFlipping && yRotation === 0) { // Only allow flip if not currently flipping and at initial position
      flipDirection = 1;
      isFlipping = true;
    }
  });
}

function draw() {
  background(255);
  rotateY(yRotation);

  if (isFlipping) {
    yRotation += 5 * flipDirection;
    if (yRotation >= 180 || yRotation <= 0) {
      yRotation = constrain(yRotation, 0, 180);
      isFlipping = false; // Stop flipping when fully rotated to one side or the other
    }
  }

  // Based on the angle, display the correct side
  if (yRotation > 90) {
    texture(topLayer); // Show topLayer if mostly flipped
  } else {
    texture(img); // Show image if not flipped or flipped back
  }
  noStroke();
  plane(width, height); // Use plane to cover the canvas
}

function mousePressed() {
  // Flip back if clicked on the canvas and it's fully flipped
  if (!isFlipping && yRotation === 180) {
    flipDirection = -1;
    isFlipping = true;
  }
}

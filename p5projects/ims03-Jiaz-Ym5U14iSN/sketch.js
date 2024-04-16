// https://editor.p5js.org/jiaying0822/sketches/Ym5U14iSN
// //ims03-Jiaz

// Attribution:
// “Monkey typing Shakespeare's complete works” by jcponcemathhttp://openprocessing.org/sketch/2220803License CreativeCommons Attribution NonCommercial ShareAlikehttps://creativecommons.org/licenses/by-nc-sa/3.0
// Link:
// <iframe src="https://openprocessing.org/sketch/2220803/embed/" width="400" height="400"></iframe>

/*
 A fun experiment! 
 
 Monkey typewritting animation
 
 The infinite monkey theorem states that if you let 
 a monkey hit the keys of a typewriter at random an 
 infinite amount of times, eventually the monkey will 
 type out the entire works of Shakespeare. 
 
 Author: Juan Carlos Ponce Campuzano
 https://dynamicmath.xyz
 26/March/2024
 
 I still need to improve it! I will be back to that soon :)
 
*/
let my = {};

let system; // For storing the particles

let repeller;
let strength = -300;

let img1, img2;
let currentImage;

function preload() {
  // Monkey images made with GeoGebra
  // https://www.geogebra.org/m/ke9sdhex
  img1 = loadImage("monkey-curves-left.png");
  img2 = loadImage("monkey-curves-right.png");
}

let letters = "abcdefghijklmnopqrstuvwxyz"; // Array of characters

let initialPositionX, initialPositionY;

let intervalSlider;

function setup() {
  my.width = 600;
  my.height = 600;
  my.xpos = 0;
  my.ypos = 0;
  // if (!my.debug) {
  //   my.width = windowWidth;
  //   my.height = windowHeight;
  // }
  createCanvas(my.width, my.height);
  // Attempt to load the saved slider value from local storage
  let savedValue = localStorage.getItem("sliderValue");
  console.log("Loaded savedValue from localStorage:", savedValue); // Debug log

  if (savedValue !== null) {
    switchInterval = int(savedValue); // Convert to integer, as localStorage stores everything as strings
  } else {
    switchInterval = 15; // Default value if nothing is saved
  }
  // Create a slider for the interval (min value, max value, starting value)
  intervalSlider = createSlider(1, 60, switchInterval);
  intervalSlider.position(120, height - 30);
  // Save the slider value to local storage whenever it changes
  intervalSlider.input(() =>
    localStorage.setItem("sliderValue", intervalSlider.value())
  );

  currentImage = img1; // Start with img1 displayed

  initialValues();

  system = new ParticleSystem(createVector(initialPositionX, initialPositionY));

  // Add a general description of the canvas.
  describe(
    "The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare. ∞ 🤯 "
  );
  my.fullScreenBtn = createButton("Full Screen");
  my.fullScreenBtn.mousePressed(full_screen_action);
  my.fullScreenBtn.style("font-size:24px");
  new_pos();
}

function full_screen_action() {
  my.fullScreenBtn.remove();
  fullscreen(true); // Explicitly using true for readability
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  // init_dim();
}

function new_pos() {
  my.xpos = random(0, width);
  my.ypos = random(0, height);
}

function draw() {
  background(0);
  cursor(HAND);
  // Set the text characteristics
  fill(255, 255, 255); // Set the fill color to black
  noStroke(); // Ensure no stroke/outline is drawn around the text
  textSize(16); // Set the text size
  // Display the label for the slider
  text("Typing Speed:", 10, height - 15);

  /* Add monkey animation */

  // Calculate the scale factor based on the canvas size
  let scaleFactor = min(width / img1.width, height / img1.height) * 0.5;

  // Calculate the scaled image size
  let scaledWidth = img1.width * scaleFactor;
  let scaledHeight = img1.height * scaleFactor;

  // Calculate the position for the scaled image
  let posX = (width * 8) / 10 - scaledWidth / 2;
  let posY = (height * 8) / 10 - scaledHeight / 2;

  // Display the current image at the specified position with scaled size
  image(currentImage, posX, posY, scaledWidth, scaledHeight);

  // Read the value from the slider
  switchInterval = intervalSlider.value();
  text(switchInterval, 260, height - 15);

  // Alternate between img1 and img2 every second
  if (frameCount % switchInterval == 0) {
    // 60 frames per second
    if (currentImage === img1) {
      currentImage = img2;
    } else {
      currentImage = img1;
    }
  }

  /* Add particles */

  system.addParticle();

  // We're applying a universal gravity.
  let gravity = createVector(0, 0.1);
  system.applyForce(gravity);

  // Applying the repeller
  repeller = new Repeller(0, 0);

  system.applyRepeller(repeller);

  system.run();
  //repeller1.display();
}

function initialValues() {
  initialPositionX = width - (width * 3.5) / 12;
  initialPositionY = height - (height * 1.9) / 10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initialValues();
  system = new ParticleSystem(createVector(initialPositionX, initialPositionY));
  intervalSlider.position(120, windowHeight - 30);
}

class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 600;
    this.mass = 2;
    this.letter = letters.charAt(floor(random(letters.length))); // Choose a random letter from the array
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(force) {
    this.force = force.copy();
    force.div(this.mass);
    this.acceleration.add(force);
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 2;
    this.radius -= 0.01;
  }

  // Method to display
  display() {
    push();
    fill(255, this.lifespan);
    stroke(0, this.lifespan);
    strokeWeight(1.7);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(this.letter, this.position.x, this.position.y);
    pop();
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0;
  }
}

class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  applyForce(force) {
    for (let p of this.particles) {
      p.applyForce(force);
    }
  }

  applyRepeller(r) {
    for (let p of this.particles) {
      this.force = r.repel(p);
      p.applyForce(this.force);
    }
  }

  run() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}

// Repeller class
class Repeller {
  constructor(x, y) {
    this.position = new p5.Vector(x, y);
    this.r = 35;
  }

  display() {
    stroke(140);
    fill(0);
    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
  }

  repel(p) {
    // [full] This is the same repel algorithm used in Chapter 2:
    // forces based on gravitational attraction:
    // https://natureofcode.com/forces/
    this.dir = new p5.Vector.sub(this.position, p.position);
    this.d = this.dir.mag();
    this.dir.normalize();
    this.d = constrain(this.d, 5, 100);
    this.force = (-1.5 * strength) / (this.d * this.d);
    this.dir.mult(this.force);
    return this.dir;
    //[end]
  }
}

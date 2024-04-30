// https://editor.p5js.org/jiaying0822/sketchescrejBf64
// ims06-Jiaz

let capture;
let newPic;
let images = [];

function setup() {
  textFont("Gaegu");
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(280, 380);
  capture.hide();

  // Create button to take picture
  snap = createButton("snap 📸");
  snap.position(10, 510);
  snap.style("font-family", "Gaegu");
  snap.style("font-size", "16px");
  snap.mousePressed(takePic);

  // Create button to shuffle images
  shuff = createButton("shuffle 🔀");
  shuff.position(85, 510);
  shuff.style("font-family", "Gaegu");
  shuff.style("font-size", "16px");
  shuff.mousePressed(shufflePics);

  // Create button to delete picture
  del = createButton("delete 🗑️");
  del.position(177, 510);
  del.style("font-family", "Gaegu");
  del.style("font-size", "16px");
  del.mousePressed(deletePic);

  // Create text area for journal entry
  entry = createElement("textarea", "The story behind this image...");
  entry.style("font-family", "Gaegu");
  entry.style("font-size", "18px");
  entry.style("background-color", "white");
  entry.style("width", "390px");
  entry.style("border-radius", "5px");
  entry.style("height", "90px");
  entry.style("resize", "none");
  entry.style("padding", "5px");
  entry.position(325, 10);

  // Create button to submit entry and save to image
  btn = createButton("submit");
  btn.position(668, 112);
  btn.style("font-family", "Gaegu");
  btn.style("font-size", "16px");
  btn.mousePressed(() => {
    if (images.length > 0) {
      images[images.length - 1].text = entry.value();
      entry.value("");
    }
  });
}

function draw() {
  background("white");

  // UI background for image display area
  fill("#feeb75");
  noStroke();
  rect(325, 145, 400, 30);
  rect(10, 10, 304, 490, 5, 5, 5, 5);

  image(capture, 27, 45, 270, 380);

  let offsetX = 325,
    offsetY = 185;
  let imgWidth = 180,
    imgHeight = 253;
  let margin = 10;

  // Iterate over images array to display each image or its text
  for (let i = 0; i < images.length; i++) {
    let x = offsetX + (i % 5) * (imgWidth + margin);
    let y = offsetY + Math.floor(i / 5) * (imgHeight + margin);
    if (!images[i].flipped) {
      image(images[i].img, x, y, imgWidth, imgHeight);
    } else {
      fill("white");
      strokeWeight(0.5);
      stroke("black");
      rect(x, y, imgWidth, imgHeight);
      fill(0);
      textSize(16);
      text(images[i].text, x + 5, y + 20, imgWidth - 10, imgHeight - 20);
    }
  }
  fill(0);
  textSize(18);
  text(`Click on each image to revisit your memories :)`, 330, 165);
}

function takePic() {
  if (images.length < 10) {
    // Only allow up to 10 images
    let img = capture.get();
    images.push({ img: img, text: "", flipped: false });
  }
}

let shuffleEffect = false;

function shufflePics() {
  shuffleEffect = true;
  images.sort(() => Math.random() - 0.5);
}
function deletePic() {
  if (images.length > 0) {
    let i = images.length - 1;
    let offsetX = 325,
      offsetY = 185;
    let imgWidth = 180,
      imgHeight = 253;
    let margin = 10;
    let x = offsetX + (i % 5) * (imgWidth + margin);
    let y = offsetY + Math.floor(i / 5) * (imgHeight + margin);

    fill("white");
    noStroke();
    rect(x, y, imgWidth, imgHeight + 40);

    images.pop();
  }
}

function mousePressed() {
  let offsetX = 325,
    offsetY = 185;
  let imgWidth = 180,
    imgHeight = 253;
  let margin = 10;

  for (let i = 0; i < images.length; i++) {
    let x = offsetX + (i % 5) * (imgWidth + margin);
    let y = offsetY + Math.floor(i / 5) * (imgHeight + margin);

    if (
      mouseX > x &&
      mouseX < x + imgWidth &&
      mouseY > y &&
      mouseY < y + imgHeight
    ) {
      images[i].flipped = !images[i].flipped; // Toggle the flipped state
      break;
    }
  }
}

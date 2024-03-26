var video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();
  let cameras = Capture.list();
  printArray(cameras);
  video = new Capture(this, cameras[3]);
  video.start();
  prev = createImage(640,360, RGB);

}

let threshold = 25;
let motionX = 0;
let motionY = 0;
let lerpX = 0;
let lerpY = 0;

function captureEvent(video){
  prev.copy(video,0,0,video.width,video.height,0,0, prev.width, prev.height);
  prev.updatePixels();
  video.read();
}

function draw(){
  video.loadPixels();
  prev.loadPixels();
  image(video,0,0);
  threshold = 50;
  let count = 0;
  let avgX = 0;
  let avgY = 0;
  loadPixels();
  for (let x = 0; x < video.width; x++){
    for (let y = 0; y < video.height; y++){
      let loc = x + y * video.width;
      let currentColor = video.pixels[loc];
      let r1 = red(currentColor);
      let g1 = green(currentColor);
      let b1 = blue(currentColor);
      let prevColor = prev.pixels[loc];
      let r2 = red(prevColor);
      let g2 = green(prevColor);
      let b2 = blue(prevColor);
      let d = distSq(r1,g1,b1,r2,g2,b2);
      if (d > threshold * threshold){
        avgX += x;
        avgY += y;
        count++;
        pixels[loc] = color(255);
      }else{
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();
  if (count > 200){
    motionX = avgX / count;
    motionY = avgY / count;
  }
  lerpX = lerp(lerpX, motionX, 0.1);
  lerpY = lerp(lerpY, motionY, 0.1);
  fill(255, 0, 255);
  strokeWeight(2.0);
  stroke(0);
}

function distSq(x1, y1, z1, x2, y2, z2) {
    var d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1);
    return d;
}

function initializeFields() {
    video = null;
    prev = null;
    threshold = 25;
    motionX = 0;
    motionY = 0;
    lerpX = 0;
    lerpY = 0;
}

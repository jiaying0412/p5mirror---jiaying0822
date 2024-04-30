//https://editor.p5js.org/jiaying0822/sketches/yTBe3nOh0
//ims05-Jiaz

let video;

function setup() {
    createCanvas(640, 480);
    // Create a video capture object
    video = createCapture(VIDEO);
    video.size(width, height); // set the size to the canvas size

    // Optional: hide the default video element to only show the canvas
    video.hide();
}

function draw() {
    background(0);
    
    // Display the video
    image(video, 0, 0, width, height);
}
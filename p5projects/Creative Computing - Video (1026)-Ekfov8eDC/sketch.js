let videos = ["apple.mov","SailorMoon.mov"];

let playArray = [];

function preload() {
  for(let i = 0; i < 1; i++){
    playArray[i]= createVideo([i]);
    console.log(i);
  }
  
  playArray[0]= createVideo(videos[0]);
  playArray[1]= createVideo(videos[1]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video1.size(640,480);
  video1.position(30,0);
  
  video2.size(640,480);
  video2.hide();
  
}

function draw() {
  background(0,0,255);
  //image(video,0,0);
}

function mousePressed() {
  
  if(isPlaying1 == false){
    video1.play();
    isPlaying1 = true;
    console.log("playing")
  }else if(isPlaying1 == true){
    video1.pause();
    isPlaying1 = false;
    console.log("paused")
  }
  if(isPlaying2 == false && isPlaying1 == false){
    video2.show();
    video2.position(30,0)
    video2.play();
    isPlaying2 = true;
  }else{
    video1.position(30,0);
    video2.hide();
    video1.play();
  }
}

// variable for the Audio
let song; 
// variable for playback rate (speed) Slider
let songRateSlider; 
// boolean keep track of if the song is playing or paused
let playbutton; 
let songText = "";
let pic;
let speed = 1;
let vol = 1;
let songPlaying = false;

function preload() {
  // song credit: "Someone Else" by The Shortsleeves
  song = loadSound("02.mp3");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  playbutton=createButton('Play');
  playbutton.position(10,20)
  playbutton.mouseReleased(playSong)
  
  
  songRateSlider = createSlider(-2,2,1,.001)
  songRateSlider.position(10,60)
  songRateSlider.size(500)
//  song1rate.mouseReleased(playSong1)
  songRateSlider.changed(updateSong)
  

  textSize(36);
  song.setVolume(vol);
 
}

function draw() {
  //noCursor();
  background(230, 230, 230);
  stroke(0);
  text("Song Rate: "+ songRateSlider.value(), 10,120)

}


function playSong(){
 if(songPlaying == false){
   song.play();
   songPlaying= true;
   playbutton.html('Pause');
 }else{
   song.pause();
    songPlaying= false;
   playbutton.html('Play');
 }
  
}
function updateSong(){
  speed = songRateSlider.value()
  song.rate(speed);
}

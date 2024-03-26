  //create variables for the sound files
let initialBeat; //initial slow beat
let flatLine; //flatline for when character is "dead"
let fastBeat; //fast heartbeat if second pulse is higher than first recorded pulse

//have the first text from the text array be displayed at initial state
let currentState = 0; 
// array that stores all four possible texts to be displayed based on the states; the fourth text is for when the second pulse recorded is not higher than the first pulse recorded, so the canvas should display a text highlighting the hint that the need for a "stronger energy"
let statesText = ['Welcome to the realm of Vitalis, a mystical land where the essence of life itself pulsates through the air. Here lies Beatrix, a guardian spirit   whose vitality is intertwined with the heartbeat of the universe. But alas, Beatrix has fallen into a deep slumber, losing its connection to the life force that once surged vibrantly within. Can you awaken Beatrix and restore its vibrant spirit? Place your finger on the pulse sensor to sense his current state and discover how you might revive our cherished guardian.', "As your touch connects, a faint pulse echoes through the void, Beatrix's spirit stirs, yet remains trapped in the shadows, its vibrant energy dimmed to a mere whisper. The guardian spirit is now in a realm of silence, caught between worlds. He needs your vitality, your spark of life, to cross back into the world of the living. The revival of his spirit hinges on a surge of energy stronger than what has been sensed. Can you muster the strength to rekindle his flame?","With your heart racing and spirit ablaze, a surge of life courses through Beatrix, illuminating the darkness with a radiant glow. The guardian spirit awakens from its ethereal slumber, reborn through the power of your vibrant energy. You have restored balance and vitality, proving that the heart's strength and the spirit's resilience can overcome any obstacle. Together, you and Beatrix share a moment of triumph, a bond forged by the heartbeat of the universe.", "The revival of his spirit hinges on a surge of energy stronger than what has been sensed. Can you muster the strength to rekindle his flame?" ];

//load all three sound files
function preload() {
  initialBeat = loadSound('sounds/Initial Heartbeat - Slow.m4a');
  flatLine = loadSound('sounds/HeartBeat flatline.m4a');
  fastBeat = loadSound('sounds/Fast Heartbeat.m4a');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Courier New');
  textSize(16);
  textWrap(CHAR);
  fill(255);
  initialBeat.loop(); //have the initialBeat be playing at the beginning 
}

function draw() {
  background(51); //this will "cover up" the old text so that the texts won't be layered on top of each other each time
  //placement of the text on the canvas 
  text(statesText[currentState], 10, 30, windowWidth - 10);
}

// Example function to update text everytime the mouse is pressed for now, for the real thing, it should be that each time the pulse sensor gets an input, the state changes according 
function mousePressed() {
  // Cycle through states each time the mouse is pressed 
  currentState = (currentState + 1) ; //still need to consider the display of the fourth text
  updateBeat();
}

function updateBeat(){
  if (currentState == 1){
    initialBeat.stop();
    flatLine.play();
    
  }
  if (currentState == 2){
    flatLine.stop();
    fastBeat.loop();
  }
  if (currentState > 2){
    fastBeat.stop();
  }
  
}

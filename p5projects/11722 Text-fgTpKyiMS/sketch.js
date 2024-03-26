let inpt;
let button;
let textOnScreen= "";

let dracula;
let counter= 27;
let spacing = 28;
let scroll = 28;
let reformat;
let wordArray;
let tokens= [",",".",":"]

function preload(){
  //loads strings into array
  dracula = loadStrings("dracula.txt");
  
}
function setup() {
  createCanvas(windowWidth, 400);
  //console.log(dracula);
  textSize(spacing);
  
  reformat = join(dracula, "")
  console.log(reformat)
  wordArray = splitTokens(reformat)
  console.log(wordArray)
  //setInterval(advance,250);
}

function draw() {
  background(220);
  for(let i = 0; i < dracula.length; i++){
    text(dracula[i], 10,scroll +spacing*i)
  }
scroll = scroll - 5 
}

function advance(){
  counter= counter+1
  console.log(counter)
}
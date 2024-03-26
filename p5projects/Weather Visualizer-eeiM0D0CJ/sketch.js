let NewYork;
let SanFran;
let Houston;
let Seattle;
let WashingtonDC;
let Miami;
let Honolulu;
let Chicago;


let domain = "https://api.openweathermap.org/data/2.5/weather?q=";

let city;
let temp;
let weather;
let appid = "&appid=1e248c1475607022f15d0047556f82c1";

function preload(){
  USmap = loadImage('MapOutline.png');
}

function setup() {
  createCanvas(860, 640);
  visualizer();
  fill(255,0,0);
  textSize(16);
text('DOUBLE-CLICK ICONS', 400, 40);
fill(0);
}

function getSanFranWeather() {
    let citysearch = "San Francisco";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(SanFran.mouseReleased(visualizer)){
  visualizer()
  }
}

function getNewYorkWeather() {
    let citysearch = "New York";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(NewYork.mouseReleased(visualizer)){
    visualizer()
  }
}

function getHoustonWeather() {
    let citysearch = "Houston";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(Houston.mouseReleased(visualizer)){
    visualizer()
  }
}

function getSeattleWeather() {
    let citysearch = "Seattle";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(Seattle.mouseReleased(visualizer)){
    visualizer()
  }
}

function getDCWeather() {
    let citysearch = "Washington DC";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(WashingtonDC.mouseReleased(visualizer)){
    visualizer()
  }
}

function getMiamiWeather() {
    let citysearch = "Miami";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(Miami.mouseReleased(visualizer)){
    visualizer()
  }
}

function getHonoluluWeather() {
    let citysearch = "Honolulu";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(Honolulu.mouseReleased(visualizer)){
    visualizer()
  }
}

function getChicagoWeather() {
    let citysearch = "Chicago";

  let url = domain + citysearch + appid + "&units=" + "imperial";
  console.log(url);
  loadJSON(url, gotData, err);
  if(Chicago.mouseReleased(visualizer)){
    visualizer()
  }
}

function gotData(data) {
  console.log("success");
  weather = data;
  city = weather.name;
  temp = weather.main.temp;
  console.log(weather.name);
}

function err(error) {
  console.log("error");
  console.log(error);
}

function draw() {
  fill(0)
  textSize(20)
  if (weather) {
    text("The weather in: " + city + " is: " + temp + " " + "°F", 380, 50);
  }
}

function visualizer(){
  image(USmap,0,0, width,height);
  
  NewYork = createImg('NewYork.png');
  NewYork.position(690,120)
  NewYork.size(65,65);
  NewYork.mousePressed(getNewYorkWeather)
 
  SanFran = createImg('SanFrancisco.png')
  SanFran.position(105,205)
  SanFran.size(65,65)
  SanFran.mousePressed(getSanFranWeather)
 
  
  Houston = createImg('cowboyhat.png')
  Houston.position(402,374)
  Houston.size(68,68)
  Houston.mousePressed(getHoustonWeather)
  
  Seattle = createImg('space-needle.png')
  Seattle.position(155,30)
  Seattle.size(65,65)
  Seattle.mousePressed(getSeattleWeather)
  
  WashingtonDC = createImg('capitol.png') 
  WashingtonDC.position(690,192)
  WashingtonDC.size(58,58)
  WashingtonDC.mousePressed(getDCWeather)
  
  Miami = createImg('beach.png')
  Miami.position(668,420)
  Miami.size(60,60)
  Miami.mousePressed(getMiamiWeather)
  
  Honolulu = createImg('shirt.png')
  Honolulu.position(330,560)
  Honolulu.size(50,50)
  Honolulu.mousePressed(draw)
  Honolulu.mousePressed(getHonoluluWeather)
  
  
  Chicago = createImg('Chicago.png')
  Chicago.position(515,190)
  Chicago.size(72,80)
  Chicago.mousePressed(draw)
  Chicago.mousePressed(getChicagoWeather)
  
}

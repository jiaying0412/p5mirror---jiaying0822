//https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1e248c1475607022f15d0047556f82c1&units=imperial

let button;
let domain = "https://api.openweathermap.org/data/2.5/weather?q=";
let city;
let temp;
let weather;
let appid = "&appid=1e248c1475607022f15d0047556f82c1"
let cityInput;
let unitInput;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cityInput = createInput("enter city here");
  unitsInput = createSelect();
  unitsInput.option("-Choose Units-");
  unitsInput.p
  
  button = createButton("GET WEATHER");
  button.mousePressed(getWeatherData);
  //button1 = createButton("Search City");
  //button1.mousePressed(searchNewCity);
  textSize(30);
}



function getWeatherData(){
  // let data = loadJSON(url,gotData,function(error){
  //   console.log(error)
  // });
  let citysearch = cityInput.value();
  let unitSelect = unitsInput.value();
  let url = domain + citysearch + appid + "&units=" + unitSelect;console.log(url); 
  loadJSON(url,gotData,err);
  
}

function gotData(data){
  console.log("Success");
  
  weather = data;
  city = weather.name
  //console.log(weather.name);
  
  temp = weather.main.temp;
}

function err(error){
  console.log("error");
  console.log(error)
}
function draw() {
  background(220);
  if (weather){
    text("The weather in: " + city + " is: " + temp + " farentheit", 10,200)
  }
}
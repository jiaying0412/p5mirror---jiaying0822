//https://editor.p5js.org/jiaying0822/sketches/HVA8tqvW2
//ims02-Jiaz

//Attribution: “Zen Pots” by newyellowhttp://openprocessing.org/sketch/2036000License CreativeCommons Attribution NonCommercial ShareAlikehttps://creativecommons.org/licenses/by-nc-sa/3.0

//Link to sketch in OpenProcessing: <iframe src="https://openprocessing.org/sketch/2036000/embed/" width="400" height="400"></iframe>

let _backLayer;
let _midLayer;
let _frontLayer;
let my = {};
let scaleX, scaleY;

let _colorSet;

async function setup() {
  my.width = 800;
  my.height = 800;
  my.xpos = 0;
  my.ypos = 0;
  createCanvas(my.width, my.height);
  describe(
    "This work randomly assembles different easing curves to create a pot shape and then uses stroke dots for an overall aesthetic style."
  );

  _backLayer = createGraphics(width, height);
  _midLayer = createGraphics(width, height);
  _frontLayer = createGraphics(width,height);

  _backLayer.colorMode(HSB);
  _midLayer.colorMode(HSB);
  _frontLayer.colorMode(HSB);
  colorMode(HSB);

  // get color
  _colorSet = GetColorSet();
  _backLayer.background(
    _colorSet.bgColor.h,
    _colorSet.bgColor.s,
    _colorSet.bgColor.b
  );

  let padding = 0.15 * min(width, height);

  // bg part
  let baseHeight = padding + 0.85 * (height - 2 * padding);

  let bgHeight = 0.06 * height;
  let xCount = width * random(0.6, 1.2);

  for (let x = 0; x < xCount; x++) {
    let yDotCount = bgHeight * dotDensity * 0.6;

    for (let y = 0; y < yDotCount; y++) {
      let t = tan(random(TWO_PI));

      let nowX = x * (width / (xCount - 1));
      let nowY = baseHeight - bgHeight * t - 0.2 * height;

      // _backLayer.noStroke();
      _backLayer.noFill();
      _backLayer.stroke(
        _colorSet.bgDotColor.h,
        _colorSet.bgDotColor.s,
        _colorSet.bgDotColor.b
      );
      _backLayer.circle(nowX, nowY, random(0, 2));
    }
  }
  UpdateLayers();

  my.fullScreenBtn = createButton("Full Screen");
  my.fullScreenBtn.mousePressed(full_screen_action);
  my.fullScreenBtn.style("font-size:24px");
  new_pos();
  let potCount = int(random(6, 18));
  // let potCount = 17;
  let potWidth = (width - padding * 2) / potCount;

  for (let i = 0; i < potCount; i++) {
    let potX = padding + (i + 0.5) * potWidth;
    let potY = baseHeight;

    let potHeight = random(0.4, 2.0) * potWidth;
    let newPot = new PotData(potX, potY, potWidth / 2, potHeight);

    // await drawPot(newPot);
    await sleep(2000); //added line, slow down drawings between pots - Jiaz
  }
  UpdateLayers();
  await sleep(1000); //added line, slower - Jiaz
}
function full_screen_action() {
  my.fullScreenBtn.remove();
  fullscreen(true); // Explicitly using true for readability
  let delay = 3000;
  setTimeout(ui_present_window, delay);
  // clear();
  // _backLayer.clear();
  // _midLayer.clear();
  // _frontLayer.clear();
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = windowWidth / my.width;
  scaleY = windowHeight / my.height;
  redrawGraphics();
  // init_dim();
}
function redrawGraphics() {
  _backLayer.resizeCanvas(windowWidth, windowHeight);
  _midLayer.resizeCanvas(windowWidth, windowHeight);
  _frontLayer.resizeCanvas(windowWidth, windowHeight);
  
  // Redefine background color after clear if needed
  _backLayer.background(
    _colorSet.bgColor.h,
    _colorSet.bgColor.s,
    _colorSet.bgColor.b
  );

  // Recalculate and redraw background dots
  let xCount = scaleX * width * random(0.6, 1.2);
  let bgHeight = 0.06 * height;
  let baseHeight = 0.15 * min(width, height) + 0.85 * (height - 2 * 0.15 * min(width, height));

  for (let x = 0; x < xCount; x++) {
    let yDotCount = bgHeight * dotDensity * 0.6;
    for (let y = 0; y < yDotCount; y++) {
      let t = tan(random(TWO_PI));
      let nowX = x * (width / (xCount - 1));
      let nowY = baseHeight - bgHeight * t - 0.2 * height;
      _backLayer.circle(nowX, nowY, random(0, 2));
    }
  }

  // Redraw pots with new positions and scales
  let potCount = int(random(6, 18));
  let potWidth = (width - 0.15 * min(width, height) * 2) / potCount;

  for (let i = 0; i < potCount; i++) {
    let potX = 0.15 * min(width, height) + (i + 0.5) * potWidth;
    let potY = baseHeight;
    let potHeight = random(0.4, 2.0) * potWidth;
    let newPot = new PotData(potX, potY, potWidth / 2, potHeight);
    drawPot(newPot);
  }

  UpdateLayers();
}


function new_pos() {
  my.xpos = random(0, width);
  my.ypos = random(0, height);
}

function UpdateLayers() {
  background(0, 0, 100);
  image(_backLayer, 0, 0);
  image(_midLayer, 0, 0);
  image(_frontLayer, 0, 0);
}
// async sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

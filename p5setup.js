let bus_unten;
let bus_oben;
let bus_rechts;
let bus_links;
//Bild Person
let img1;
//Hintergrundild Bus
let img2;

function preload() {
  bus_unten = loadImage("snake_bus_unten.png");
  bus_oben = loadImage("snake_bus_oben.png");
  bus_rechts = loadImage("snake_bus_rechts.png");
  bus_links = loadImage("snake_bus_links.png");
  img1 = loadImage("pixelart_man.png");
  img2 = loadImage("bus.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var p5canvas = createCanvas(windowWidth, windowHeight);
  // // p5canvas.parent("p5canvas");
  frameRate(30);
}

window.addEventListener("resize", function() {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;

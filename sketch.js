// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

//unction preload() {
//  dvd = loadImage('dvd_logo.png');
//}

function preload() {
  jam = loadImage('cuddleJam.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(jam, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + jam.width >= width) {
    xspeed = -xspeed;
    x = width - jam.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    //pickColor();
  }

  if (y + jam.height >= height) {
    yspeed = -yspeed;
    y = height - jam.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
   // pickColor();
  }
}

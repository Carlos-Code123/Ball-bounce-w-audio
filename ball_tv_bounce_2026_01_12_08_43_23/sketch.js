let x = 100;
let y = 100;
let dx = 2;
let dy = 3;
let speed;
let pongSound;
let music;


function preload(){
  soundFormats('mp3', 'ogg');
  pongSound = loadSound("pongSound.mp3");
  music = loadSound("music.mp3");

  }

function setup() {
  createCanvas(600, 400);
  music.loop();
}
function draw() {
  background(220);
  
  
//ball
  ellipse(x, y, 40, 40);
//direction
  x = x + dx;
  y = y + dy;
  if (x > width - 20 || x < 20){
      dx = dx *-1;
    pongSound.play();
      }
  if (y > height - 20 || y < 20){
      dy = dy *-1;
    pongSound.play();
      }
}

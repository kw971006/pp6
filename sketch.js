let count = 10;
let input = 0;
let k = 0;
let button, info;
let font, fontsize = 100;
let stvjobs;
let sliderS, sliderT;

function preload(){
  font = loadFont('Azonix.otf');
  stvjobs = loadSound('NeverStop.mp3');
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  input = createInput();
  input.position(20,65);
  sliderS = createSlider(0,255,255, 10);
  sliderS.position(windowWidth/2, 10);
  
  sliderT = createSlider(0,255,50, 10);
  sliderT.position(windowWidth/2, 25);
  fill(255);
  
  button = createButton('submit')
  
  button.position(input.x + input.width, 65);
  button.mousePressed(whenbottonpressed);
  
  
  info = createElement('h2', 'what is your logo');
  info.style('color', '#008B8B');
  info.position(20,5);
  
  textAlign(CENTER);
  textSize(50);
  
  
}
function draw(){
  let valS = sliderS.value();
  
   background(0, 50);
  angleMode(RADIANS);
  
  noStroke()
  let speed = map(sin(frameCount / 100), -1, 1, 0, 1)
  let speedy = map(sin(frameCount /70), -1, 1, 0, 1)
  
  translate(width / 2, height /2);
  
  for(let i = 0;i< TWO_PI; i+= TWO_PI / count){
    rotate(TWO_PI / count);
    push();
    fill(valS, 255 - (speed *10), 255 - (i*8), 50);
    translate(12 * TWO_PI * speed, 3*TWO_PI*speedy);
    ellipse(0,0, 1000/count, 1000/ count);
    pop();
  }
  
  if (k === 1){
    show()
  }
  
  
}
function show() {
  
  
  let varT = sliderT.value();
  const logo = input.value();
  text(logo, windowWidth/1000, windowHeight/1000+30);
  fill(100, varT, 150, 200);
  textFont(font);
  textSize(fontsize);
  

}

function whenbottonpressed(){
  k+=1
  stvjobs.play();
}


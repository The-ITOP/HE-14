var imgArray = [];

function preload() {
  imgArray[0] = loadImage("Img/Emma.png");
  imgArray[1] = loadImage("Img/Nadine.png");
  imgArray[2] = loadImage("Img/Oliver.png");
  imgArray[3] = loadImage("Img/ball.webp");
  imgArray[4] = loadImage("Img/Emil.png");
  imgArray[5] = loadImage("Img/Bruno.png");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  var button = createButton("Draw Emma");
  button.parent("button-holder");
  button.mousePressed(emmaDraw);

  var button2 = createButton("Draw Nadine");
  button2.parent("button-holder");
  button2.mousePressed(nadineDraw);

  var button3 = createButton("Draw Random Image");
  button3.parent("button-holder");
  button3.mousePressed(randomDraw);

  var button5 = createButton("Draw Emil");
  button5.parent("button-holder");
  button5.mousePressed(emilDraw);

  var button6 = createButton("Draw Bruno");
  button6.parent("button-holder");
  button6.mousePressed(brunoDraw);

  var button4 = createButton("Clear Screen");
  button4.parent("button-holder");
  button4.mousePressed(clearScreen);

  var button7 = createButton("clear screen & change color");
  button7.parent("button-holder");
  button7.mousePressed(clearScreen);
  button7.mousePressed(changeColor);

  frameRate(60);
  rectMode(CENTER);
  imageMode(CENTER);
  background(220);
}

function draw() {}

function emmaDraw() {
  image(imgArray[0], random(width), random(height), 50, 50);
}

function nadineDraw() {
  image(imgArray[1], random(width), random(height), 50, 50);
}

function randomDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 50, 50);
}

function emilDraw() {
  image(imgArray[4], random(width), random(height), 50, 50);
}

function brunoDraw() {
  image(imgArray[5], random(width), random(height), 50, 50);
}

function clearScreen() {
  background(220);
}

function changeColor() {
  background(random(255), random(255), random(255));
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[2], mouseX, mouseY, 50, 50);
    }
  }
}

function keyPressed() {
  if (key === "b") {
    image(imgArray[3], random(width), random(height), 50, 50);
  }
  if (key === "s") {
    saveCanvas("leDogs.jpg");
  }
}

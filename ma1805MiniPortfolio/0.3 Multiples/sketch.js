let words = ["hello", "coding", "is", "fun", "with", "p5"];
let i = 0;

function setup() {
  createCanvas(400, 400);
  textSize(40);
  textAlign(CENTER);
  frameRate(2);
}

function draw() {
  background(220);

  text(words[i], width / 2, height / 2);

  i = i + 1;

  if (i >= words.length) {
    i = 0;
  }
}
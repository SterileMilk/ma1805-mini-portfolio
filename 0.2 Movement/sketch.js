let mouthSize = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // face outline
  fill(255, 224, 189);
  ellipse(200, 200, 250, 250);

  // eyes
  fill(0);
  ellipse(150, 170, 20, 20);
  ellipse(250, 170, 20, 20);

  // mouth - size changes over time using a variable
  fill(255, 0, 0);
  ellipse(200, 250, 80, mouthSize);

  mouthSize = mouthSize + 1;

  // reset so it doesn't grow forever
  if (mouthSize > 100) {
    mouthSize = 40;
  }
}




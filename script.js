let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(1000, 1000);
  background(25,43,255);
}


function draw() {
  noStroke();
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 10, 10);

  fill(42, 157, 143);
  ellipse(285,300,450,450);

  stroke(random(colorlist));
  strokeWeight(5);
  fill(random(256));
  textSize(50);
  text("HELLO",200,300);
}
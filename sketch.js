function setup() {
  createCanvas(400, 400);
  frameRate(50);
}

function draw() {
  background(255, 70, 60);
  
  noStroke();
  
  translate(200, 200); 
  
  angleMode(RADIANS);
  
  rotate(radians(frameCount));
  
  angleMode(DEGREES);
  
  yinYang(200, 200, 1, 255);
  
function yinYang(x, y, s, o) {
  scale(s);
  //white tail
    fill(255, o);
	  arc(0, 0, 300, 300, 270, 90);
  //black tail
    fill(0, o);
	  arc(0, 0, 300, 300, 90, 270);
  //white head
    fill(255, o);
      circle(0, 75, 150);
  //black head
    fill(0, o);
      circle(0, -75, 150);
  //white circle
    fill(255, o);
      circle(0, -75, 40);
  //black circle
    fill(0, o);
      circle(0, 75, 40);
  }

}
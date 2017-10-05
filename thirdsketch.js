//Declare
var xPos=5;
var speed=5;
var turtle=5;
var turtlespeed=2;
var bunny=3;
var bunnyspeed=6;

function setup(){
    createCanvas(600, 400);
    //background(250, 250, 100);
    fill(250, 200, 200);


}

function draw() {
  background(250, 250, 100);
  // fill(255);
  // rect(300, 200, 100, 100);
  //stroke(155, 0, 150)
  //strokeWeight(4);



  //this is a circle

  // fill(250, 200, 200);
  triangle(xPos,100, turtle, 20, 86, bunny);
  //       ^x    ^y   ^x     ^y  ^x   ^y
  turtle = turtle+turtlespeed;
  bunny = bunny+bunnyspeed;
  xPos = xPos + speed;

  if (bunny > height || bunny<0){
    bunnyspeed *=-1;
  }

  if (turtle > width || turtle < 0) {
    turtlespeed *=-1;
  }

  if (xPos > width || xPos < 0){
      speed *= -1;
    }
      //speed * -1
    rect(200, 200, 100, 100);

 if (mouseIsPressed) {

  fill(random(255), random(255),
  random(255));
  //background(204, 153, 255);

  }
}

// something called width= canvas width
//something called height =canvas height
//if xPos is greater than 600 or less than 0
//can make a function or image a variable-->can draw anywhere on the page (must use local server of images on p5 --> python)



  //When the circle gets to the end of the camers, reverse




  // //this is a square
  // fill(200, 250, 200);
  // rect(400, 100, 50, 50);
  //
  // console.log(mouseX);


// if (mouseX > 300) {
//   line(0, 0, 600, 400);}
//   {fill(255,0, 0);
//     rect(200, 200, 100, 100);}
//   else if(mouseX>200){
//     fill(0, 255, 0);
//     triangle(300, 400, 200, 150, 600, 400);
//   }
//   else if(mouseX> 100){
//     rect(200, 200, 100, 100);
//     fill(0,255,0);
//   }
//   else if {
//     fill(0, 255, 0);
// }

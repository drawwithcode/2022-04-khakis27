// let myColor=10;

// function setup() {
// 	createCanvas(windowWidth, windowHeight)
// 	console.log("Shake me babeeee!")
// 	// by defaults equals to 30
//   	setShakeThreshold(10);
// 	textSize(20)
// 	textAlign(CENTER)
// }

// function draw() {
// 	background(myColor)
// 	text('Shake to read me better', width/2, height/2)
// }

// function deviceShaken() {
//   	myColor+=0.3;
// 	if (myColor>255) myColor=10;
// }

// // request permissions on iOS
// function touchEnded(event) {
// 	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
// 		DeviceOrientationEvent.requestPermission()
// 	}
// }

/**
 * 
 *  Image Matrix by Ricardo Artur
 *  Based on Explode by Daniel Shiffman.
 *
 *  The program creates a black, white and gray matrix, based on loaded image; 
 *  Mouse position controls white (X) and black (Y) limits;
 *  Mouse click changes type of matrix (circle, square or triangle); 
 *  Mouse Wheel controls cell size (between 5 and 100);
 */

// PImage img; // The source image
let cellsize; // Dimensions of each cell in the grid
let columns, rows; // Number of columns and rows in our system
let x, y;
let loc;
let whiteLimit = 240; // default brightness white limit
let blackLimit = 90; // default brightness black limit
let type;
var mode = 0

function preload() { 
	img = loadImage('./img/ermellingo.jpg'); // Load the image
	
} 

function setup() {
	createCanvas(windowWidth, windowHeight);
	cellsize = 5;
	frameRate(12);
	type = "Circle";
	rectMode(CENTER);
	noStroke();

}

function draw() {
	background(60);

	if (mode == 0) {
		screen1();
	  } else if (mode == 1) {
		screen2();
	  }

function screen1() {
	textFont('Libre Baskerville, serif');
	textAlign(CENTER);
	textSize(30);
	fill(255);
	textStyle(BOLD);
	text('you dont have to be \n Leonardo DaVinci \n  to be a good artist \n just shake and touch  ', width/2, height/2);
	}

function screen2() {
	img.resize(0, windowHeight);
	for (let i=0; i<touches.length; i++){
	const touch = touches[i];
	let factor = map(touches[i].x , 0, width, 2, 120);
	if (touches[i].x >= 0){
		if (touches[i].x < width){
			if (touches[i].y >=0){
				if(touches[i].y < height){
				whiteLimit = floor(map(touches[i].x, 0, width, 100, 50));
				blackLimit = floor(map(touches[i].y, 0, height, 50, 0));
	}}}}}	
	
  // Begin loop for columns
	columns = floor(img.width / cellsize);  // Calculate # of columns
  rows = floor(img.height /cellsize);  // Calcutlate # of rows
	// img.loadPixels();
	

  for ( let i = 0; i < columns; i++) {
    // Begin loop for rows
    for ( let j = 0; j < rows; j++) {
      x = i*cellsize + cellsize/2;  // x position
      y = j*cellsize + cellsize/2;  // y position
      let c = img.get(x,y);  // Grab the color
			
			//draw matrix 
			push();
      translate(x, y);
			//choose color according to white and black limits
      if (brightness(c) > whiteLimit){
        fill(255);
      } else if (brightness(c) < blackLimit){
        fill(0);
      } else {
        fill(125);
      }
			
			//type of shape for the grid 
      if (type == "Circle"){
       ellipse(0, 0, cellsize, cellsize);
      }
      if (type ==  "Square") {
      rect(0, 0, cellsize, cellsize);
      }
       if (type == "Triangle"){
        triangle(0-cellsize/2, 0+cellsize, 0+cellsize/2, 0+cellsize, 0, 0 );
       }
      pop();
			// end of matrix
   } 
}
}
	

// function draw() {
//   clear();
//   let display = touches.length + ' touches';
//   text(display, 5, 10);
// }


}

// control type of shape
function deviceShaken() {
	
		if (type == "Triangle") {
			type = "Circle";
		} else if (type == "Square") {
			type = "Triangle";
		} else if (type == "Circle") {
			type = "Square";
		}
	}
	// if (mouseButton == RIGHT) {
	// 	// reset
	// 	cellsize = 5;
	// 	type = "Circle";
	// }

// control the cell size
function mouseWheel(event) {
	if(event.delta > -614){
		if(event.delta < 614){
	let e = map(event.delta, -614, 614, 3 , 30);
		
	cellsize = int(e);
			}}
} 

//Method 1: More flexible, any order
function mousePressed() {
	if (mode == 0) {
	  mode = 1;
	}
  }

function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}





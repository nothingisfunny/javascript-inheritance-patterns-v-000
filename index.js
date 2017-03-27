//Rectangle constructor
function Rectangle(sides, width, height){
	this.sides = sides;
	this.width = width;
	this.height = height;
	this.area = function(){
		return this.width * this.height;
	}
	this.perimeter = function(){
		return (this.width + this.height) * 2
	}
}

//Square constructor
function Square(sides, length){
	Rectangle.call(this, sides, length, length)
}

var rect = new Rectangle(4, 3, 5);
var square = new Square(4, 2);

//adding functions to object's prototype
function Rectangle(sides, width, height){
	this.sides = sides;
	this.width = width;
	this.height = height;
}

Rectangle.prototype.area = function(){
	return this.width * this.height;
}

Rectangle.prototype.perimeter = function (){
	return (this.width + this.height) * 2;
}

var rect = new Rectangle(4, 3, 2)

//Shape
function Shape(sides, x, y){
	this.sides = sides;
	this.x = x;
	this.y = y;
}

function Rectangle(x, y, width, height){
	Shape.call(this, 4, x, y);
	this.width = width;
	this.height = height;
}

//set Rectangle prototype to an instance of a shape
Rectangle.prototype = Object.create(Shape.prototype);
//set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

//extend with Rectangle behaviour
Rectangle.prototype.area = function(){
	return this.width * this.height;
}

Rectangle.prototype.perimeter = function(){
	return (this.width + this.height) * 2;
}

Shape.prototype.move = function(x, y){
	this.x = x;
	this.y = y;
}

Shape.prototype.position = function(){
	return(this.x + ", " + this.y);
}
var rect = new Rectangle(1, 0, 4, 5)
var shape = new Shape(3, 2, 2)
rect.move(8,9);
shape.move(2,3);

// see all properties 
for (var prop in rect) {
  console.log("rect." + prop + " = " + rect[prop]);
}
//see properties directly available on rect
for (var prop in rect) {
  if(rect.hasOwnProperty(prop)) {
    console.log("rect." + prop + " = " + rect[prop]);
  }
}


//extending ingeritance chain
function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}
 
function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  // call Shape constructor
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}
 
//inherit from Shape prototype
Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;
 
//extend Quadrilateral
Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}
 
function Rectangle(x, y, width, height) {
  //call Quadrilateral constructor
  Quadrilateral.call(this, x, y, width, height, width, height);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Quadrilateral.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle
 
// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
 
function Square(x, y, length) {
  //call Rectangle constructor
  Rectangle.call(this, x, y, length, length)
  this.length = length;
}
 
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square
 
var square = new Square(1,1,3);
square.length;
// 3 - defined on Square
 
square.width;
// 3 - inherited from Rectangle
 
square.sideOneLength;
// 3 - inherited from Quadrilateral through Rectangle
 
square.position();
// 1,1 - from Shape
 
square.move(2,3); // from Shape
square.position();
// 2,3
 
square.area();
// 9 - from Rectangle
square.perimeter();
// 12 - from Quadrilateral
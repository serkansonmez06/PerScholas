// //1-Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// // 1-1-Write a function called circle_area that returns the area of the object.
// // 1-2-Write a function total_sides that returns the number of sides of the object.
//
class Circle {//create class with attributes and instantiate
  constructor(radious) {
    this.pi = 3.14;
    this.radious = radious;
  }
    get area(){ //The get syntax binds an object property to a function that will be called when that property is looked up.
    return this.calcArea();
  }
  calcArea(){//formula of rectangle area/ method
    return this.pi*this.radious*this.radious;
  }
  total_sides(sides){ //method for sides
    this.side = sides;
  }

}
const circle = new Circle(10);


console.log("Area of circle = " + circle.area);//print area
circle.total_sides('infinite'); //side of the circle
console.log(circle);//print side and radious

const circle1 = new Circle (45);
console.log("Area of circle1 = "+ circle1.area);
circle.total_sides('infinite');
console.log(circle1);






// 2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// 2.1 Write a function called rectangle_area that returns the area of the given object.
// 2.2 Write a function total_sides that returns the number of sides of the object.

class Rectangle {//create class with attributes and instantiate
  constructor( height,width) {
    this.height = height;
    this.width = width;
  }
  get area(){// get will call this.calcArea
    return this.calcArea();
  }
  calcArea(){//will calculate area of rectangle
    return this.height*this.width;
  }

  numberOfsides(sides){ //method for sides
           this.sides = sides;
  }
}
var rectangle = new Rectangle(15 ,10)//input
console.log("Area of rectangle = " +rectangle.area);//print
rectangle.numberOfsides(4);//number of sides
console.log(rectangle);//height, width and sides

var rectangle1 = new Rectangle (23, 14)
console.log('Area of Rectangle1 = '+ rectangle1.area);
rectangle1.numberOfsides(4);
console.log(rectangle1);

/**** we do this way as well instead of using get ****?*/

class Rectangle{
  constructor(length,width){
    this.length = length;
    this.width = width;
  }
  rectangle_area(){
    console.log("Area of a rectangle: " + this.length * this.width);
  }
  total_sides(){
    console.log("Total sides of rectangle = 4");
  }
}

const rectangle1 = new Rectangle(4,21);
rectangle1.rectangle_area();
rectangle1.total_sides();

const rectangle2 = new Rectangle(21,35);
rectangle2.rectangle_area();
rectangle2.total_sides();


//3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// 3.1 Write a function called square_area that returns the area of the given object.
// 3.2 Write a function total_sides that returns the number of sides of the object.

class Square { //create class with attributes and instantiate
  constructor(height) {
    this.height = height;
  }
  get area(){//call calcArea
    return this.calcArea();
  }
  calcArea(){//calculate area of sqaure
    return this.height*this.height;
  }
  numberOfsides(sides){ //number of sides
    this.sides = sides;
  }
}
var square = new Square (5)//input
console.log("Area of square = " + square.area);//area
square.numberOfsides(4);//sides
console.log(square);//print height and sides

var square1 = new Square (52)
console.log("Area of square1 = "+ square1.area);
square1.numberOfsides(4);
console.log(square1);

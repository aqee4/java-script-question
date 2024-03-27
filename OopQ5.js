//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two
// subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
//Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape {
    calculateArea() {
      // This method will be overridden by subclasses
      console.log("Area calculation method needs to be implemented by subclasses.");
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Create an instance of Circle
  const circle = new Circle(5);
  console.log("Area of the circle:", circle.calculateArea());
  
  // Create an instance of Triangle
  const triangle = new Triangle(4, 6);
  console.log("Area of the triangle:", triangle.calculateArea());
  
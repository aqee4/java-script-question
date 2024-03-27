//2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Create an instance of Rectangle
  const rectangle = new Rectangle(5, 7);
  
  // Calculate area and perimeter
  const area = rectangle.calculateArea();
  const perimeter = rectangle.calculatePerimeter();
  
  console.log("Area of the rectangle:", area);
  console.log("Perimeter of the rectangle:", perimeter);
  


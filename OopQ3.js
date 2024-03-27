//3. Write a JavaScript program that creates a class called 'Vehicle' with properties for
// make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from 
//the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.


class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
      super(make, model, year);
      this.numberOfDoors = numberOfDoors;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Number of Doors: ${this.numberOfDoors}`);
    }
  }
  
  // Create an instance of Car
  const myCar = new Car("Toyota", "Camry", 2022, 4);
  
  // Display details of the car
  myCar.displayDetails();
  
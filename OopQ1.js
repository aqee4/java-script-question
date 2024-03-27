//1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  // Create instances of Person
  const person1 = new Person("John", 30, "USA");
  const person2 = new Person("Alice", 25, "Canada");
  
  // Display details of each person
  console.log("Details of Person 1:");
  person1.displayDetails();
  console.log("\nDetails of Person 2:");
  person2.displayDetails();
  
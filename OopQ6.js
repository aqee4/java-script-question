//6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
// Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the
// 'Employee' class and adds an additional property for department. Override the annual salary calculation
// method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      // Managers get a bonus of 20% of their salary
      const baseSalary = this.salary * 12;
      const bonus = 0.2 * baseSalary;
      return baseSalary + bonus;
    }
  }
  
  // Create instances of Manager
  const manager1 = new Manager("John Doe", 60000, "Marketing");
  const manager2 = new Manager("Jane Smith", 80000, "Finance");
  
  // Calculate annual salary for managers
  const annualSalary1 = manager1.calculateAnnualSalary();
  const annualSalary2 = manager2.calculateAnnualSalary();
  
  console.log(`Annual salary of ${manager1.name}: $${annualSalary1}`);
  console.log(`Annual salary of ${manager2.name}: $${annualSalary2}`);
  
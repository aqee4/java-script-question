//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  // Printing object before deletion
  console.log("Before deletion:");
  console.log(student);
  
  // Deleting the rollno property
  delete student.rollno;
  
  // Printing object after deletion
  console.log("\nAfter deletion:");
  console.log(student);
  



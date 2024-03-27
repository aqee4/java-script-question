//1. Write a JavaScript program to list the properties of a JavaScript object.
//Sample Output: name,sclass,rollno


var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  // Function to list properties of an object
  function listProperties(obj) {
    return Object.keys(obj).join(",");
  }
  
  // Displaying the properties
  console.log("Sample Output:", listProperties(student));
  
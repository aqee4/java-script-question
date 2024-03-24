//////////////////////sixth Question//////////////////////////////

function findLargestInteger(num1, num2, num3) {
  let largest = num1; // Assume num1 is the largest initially

  // Check if num2 is larger than largest
  if (num2 > largest) {
      largest = num2; // Update largest if num2 is larger
  }

  // Check if num3 is larger than largest
  if (num3 > largest) {
      largest = num3; // Update largest if num3 is larger
  }

  return largest; // Return the largest number
}

// Example usage
const num1 =10;
const num2 = 25;
const num3 = 153;
const largestNumber = findLargestInteger(num1, num2, num3);
console.log("The largest number is:", largestNumber);

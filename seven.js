////////seven Question////////////////////////////////


function swapAdjacentDigits(integer) {
  let integerStr = integer.toString(); // Convert integer to a string
  let swappedInteger = ''; // Initialize the swapped integer string

  // Loop through the string with a step of 2
  for (let i = 0; i < integerStr.length; i += 2) {
      // Swap adjacent digits in each pair
      if (i < integerStr.length - 1) {
          swappedInteger += integerStr[i + 1] + integerStr[i];
      }
  }

  return parseInt(swappedInteger); // Convert the resulting string back to an integer
}

// Example usage
const givenInteger = 123456;
const swappedInteger = swapAdjacentDigits(givenInteger);
console.log("Given Integer:", givenInteger);
console.log("Swapped Integer:", swappedInteger);


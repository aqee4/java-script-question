//////////////////////Fourth Question//////////////////////////////


function rotateStringRight(str) {
  // Get the last character of the string
  const lastChar = str.charAt(str.length - 1);

  // Remove the last character from the string
  const rotatedString = lastChar + str.substring(0, str.length - 1);

  return rotatedString;
}

// Example usage
const originalString = 'w3resource';
const rotatedString = rotateStringRight(originalString);
console.log("Original String:", originalString);
console.log("Rotated String:", rotatedString);

////////// 62 Question////////////////////////////////
const givenString = "paython";
function moveLastThreeCharactersToStart(str) {
  // Check if the length of the string is greater than or equal to three
  if (str.length >= 3) {
      // Extract the last three characters
      const lastThreeCharacters = str.slice(-3);

      // Remove the last three characters from the string
      const remainingString = str.slice(0, -3);

      // Move the last three characters to the start and concatenate with the remaining string
      const modifiedString = lastThreeCharacters + remainingString;

      return modifiedString;
  } else {
      return "String length must be greater than or equal to three.";
  }
}

// Example usage

const modifiedString = moveLastThreeCharactersToStart(givenString);
console.log("Original String:", givenString);
console.log("Modified String:", modifiedString);
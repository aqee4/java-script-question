//118. Write a JavaScript program to check whether a given number is in a given range. 


function isInRange(number, min, max) {
    return number >= min && number <= max;
}

// Test the function
const number = 10;
const minRange = 5;
const maxRange = 20;

console.log(`${number} is in range [${minRange}, ${maxRange}]:`, isInRange(number, minRange, maxRange));

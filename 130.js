//130. Write a JavaScript program to find the number of even digits in a given integer. 

function countEvenDigits(number) {
    let count = 0;
    
    // Absolute value of the number to handle negative integers
    number = Math.abs(number);
    
    while (number > 0) {
        // Extract the last digit
        const digit = number % 10;
        
        // Check if the digit is even
        if (digit % 2 === 0) {
            count++;
        }
        
        // Remove the last digit from the number
        number = Math.floor(number / 10);
    }
    
    return count;
}

// Test the function
const givenInteger = 123456789;
console.log("Given Integer:", givenInteger);
console.log("Number of Even Digits:", countEvenDigits(givenInteger));

//13. Write a JavaScript function to compute the factors of a positive integer.

function computeFactors(num) {
    // Initialize an empty array to store factors
    const factors = [];

    // Loop from 1 to the number itself
    for (let i = 1; i <= num; i++) {
        // Check if i divides num without leaving a remainder
        if (num % i === 0) {
            // If it does, i is a factor, so add it to the factors array
            factors.push(i);
        }
    }

    // Return the array of factors
    return factors;
}

// Test the function
const num = 12;
console.log("Factors of", num, ":", computeFactors(num));

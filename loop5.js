//12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

let sum = 0;

// Iterate through numbers from 1 to 999
for (let i = 1; i < 1000; i++) {
    // Check if the number is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
        // Add the number to the sum
        sum += i;
    }
}

// Display the sum
console.log("The sum of multiples of 3 and 5 under 1000 is:", sum);

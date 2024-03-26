//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Test the function
const base = parseFloat(prompt("Enter the base:"));
const exponent = parseInt(prompt("Enter the exponent:"));

if (!isNaN(base) && !isNaN(exponent)) {
    const result = power(base, exponent);
    console.log(`The result of ${base}^${exponent} is:`, result);
} else {
    console.log("Please enter valid numbers for base and exponent.");
}

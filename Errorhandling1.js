//1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function validateInteger(number) {
    if (Number.isInteger(number)) {
        console.log("Validation passed");
    } else {
        throw new Error("The number must be an integer.");
    }
}

// Example usage
try {
    validateInteger(5);   // This is an integer
    validateInteger(5.5); // This is not an integer
} catch (error) {
    console.error("Validation failed:", error.message);
}

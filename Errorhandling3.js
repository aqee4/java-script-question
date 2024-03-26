//3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function divide(a, b) {
    if (b === 0) {
        throw new Error("The second number cannot be zero.");
    }
    return a / b;
}

// Example usage
try {
    const result = divide(10, 2); // This will execute without error
    console.log("Result:", result);

    const result2 = divide(10, 0); // This will throw an error
    console.log("Result:", result2); // This line won't be executed because an error is thrown in the previous line
} catch (error) {
    console.error("An error occurred:", error.message);
}

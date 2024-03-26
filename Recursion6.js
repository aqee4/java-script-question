function fibonacci(n) {
    let fibonacciSequence = [];
    if (n === 1) {
        fibonacciSequence.push(0); // If n is 1, only the first Fibonacci number (0) is needed
    } else if (n >= 2) {
        fibonacciSequence.push(0, 1); // If n is 2 or more, initialize the sequence with the first two Fibonacci numbers (0 and 1)
        for (let i = 2; i < n; i++) {
            // Generate subsequent Fibonacci numbers by adding the last two numbers in the sequence
            fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
        }
    }
    return fibonacciSequence;
}

// Example usage
const n = 12; // Get the first 10 Fibonacci numbers
const result = fibonacci(n);
console.log("First", n, "Fibonacci numbers:", result);

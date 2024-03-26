// Define a function called findPairIndices
function findPairIndices(numbers, target) {
    // Iterate through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // For each number, iterate through all other numbers in the array
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the sum of the current pair of numbers equals the target
            if (numbers[i] + numbers[j] === target) {
                // If it does, return the indices of the two numbers
                return [i, j];
            }
        }
    }
    // If no pair is found, return null
    return null;
}

// Test the function with sample input
const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;
const result = findPairIndices(numbers, target);

// Print the result
if (result !== null) {
    console.log("Indices of the pair:", result[0], ",", result[1]);
} else {
    console.log("No pair found.");
}

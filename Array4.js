// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3


function findPairIndices(numbers, target) {
    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // If the sum of the current pair equals the target, return their indices
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    // If no pair is found, return null
    return null;
}

// Test the function
const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;
const result = findPairIndices(numbers, target);
console.log("Input:", numbers, ", target:", target);
console.log("Output:", result !== null ? result.join(", ") : "No pair found.");

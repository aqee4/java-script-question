//91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

function maxSumOfConsecutive(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Calculate sum of the first k elements
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;

    // Iterate through the array starting from kth element
    for (let i = k; i < arr.length; i++) {
        // Add the current element and subtract the first element of the previous window
        currentSum += arr[i] - arr[i - k];
        // Update maxSum if currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test the function
const array = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 3;
console.log("Array:", array);
console.log("Maximum sum of", k, "consecutive numbers:", maxSumOfConsecutive(array, k));

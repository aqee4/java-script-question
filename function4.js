//11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function findSecondLowestAndGreatest(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    // Return the second lowest and second greatest numbers
    return arr[1] + "," + arr[arr.length - 2];
}

// Test the function
const sampleArray = [1, 2, 3, 4, 5];
const result = findSecondLowestAndGreatest(sampleArray);
console.log("Sample array:", sampleArray);
console.log("Expected Output:", result);

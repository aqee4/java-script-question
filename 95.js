//95. Write a JavaScript program to replace all numbers with a specified number in an array of integers. 

function replaceNumbers(arr, target, replacement) {
    // Iterate through the array and replace the target number with the replacement number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            arr[i] = replacement;
        }
    }
    return arr;
}

// Test the function
const array = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];
const targetNumber = 4;
const replacementNumber = 0;

console.log("Original Array:", array);
console.log("Array after replacement:", replaceNumbers(array, targetNumber, replacementNumber));

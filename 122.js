//122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

function checkSequence(arr) {
    let increasing = true;
    let decreasing = true;

    // Check for increasing sequence
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            increasing = false;
            break;
        }
    }

    // Check for decreasing sequence
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            decreasing = false;
            break;
        }
    }

    // Return result
    if (increasing) {
        return "Strictly Increasing Sequence";
    } else if (decreasing) {
        return "Strictly Decreasing Sequence";
    } else {
        return "Neither Increasing nor Decreasing Sequence";
    }
}

// Test the function
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [1, 2, 2, 4, 5];

console.log("Array 1:", checkSequence(arr1));
console.log("Array 2:", checkSequence(arr2));
console.log("Array 3:", checkSequence(arr3));

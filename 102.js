//Write a JavaScript program to find the number of inversions of a given array of integers.

function countInversions(arr) {
    let inversions = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }

    return inversions;
}

// Test the function
const array = [1, 3, 5, 2, 4, 6];
console.log("Number of inversions:", countInversions(array));

//94. Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

function findMostFrequentNumber(arr) {
    let maxCount = 0;
    let mostFrequentNumber;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequentNumber = arr[i];
        }
    }

    return mostFrequentNumber;
}

// Test the function
const array = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9, 4, 4, 4];
console.log("Array:", array);
console.log("Most frequent number:", findMostFrequentNumber(array));

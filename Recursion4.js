//4. Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function sumArray(array) {
    let sum = 0;
    // Loop through each element of the array
    for (let i = 0; i < array.length; i++) {
        // Add the current element to the sum
        sum += array[i];
    }
    // Return the sum
    return sum;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6];
const result = sumArray(array);
console.log(result); // Output: 21

//46. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer. 


function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 3); // Adding the cube of each integer to the sum
    }
    return sum;
}

// Test the function
const givenInteger = 5;
console.log("Given Integer:", givenInteger);
console.log("Sum of Cubes:", sumOfCubes(givenInteger));

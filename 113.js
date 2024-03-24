//113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

function calculateSum(n) {
    let sum = 0;
    let divisor = 1;

    // Keep dividing n by 2 and adding to the sum until the divisor becomes greater than n
    while (n >= divisor) {
        sum += n / divisor;
        divisor *= 2;
    }

    return sum;
}

// Test the function
const n = 10;
console.log("Sum of the series for n =", n, "is:", calculateSum(n));

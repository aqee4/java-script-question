// 5. Write a JavaScript program to compute the exponent of a number.  
//Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.



function computeExponent(base, exponent) {
    // Base case: if exponent is 0, return 1 (any number raised to the power of 0 is 1)
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply the base by itself recursively (exponent - 1) times
    return base * computeExponent(base, exponent - 1);
}

// Example usage
const base = 8;
const exponent = 2;
const result = computeExponent(base, exponent);
console.log(`${base} raised to the power of ${exponent} is:`, result); // Output: 2 raised to the power of 3 is: 8

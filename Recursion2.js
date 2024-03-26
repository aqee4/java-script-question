//3. Write a JavaScript program to get integers in the range (x, y) using recursion.  
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]


function range(x, y) {
    // Base case: If x is one less than y, return an empty array
    if (x + 1 >= y) {
        return [];
    }
    // Recursive case: Concatenate x + 1 with the result of calling range recursively with x + 1 and y
    return [x + 1].concat(range(x + 1, y));
}

// Example usage
const result = range(2, 9);
console.log(result); // Output: [3, 4, 5, 6, 7, 8]

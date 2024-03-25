//3. Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g


function generateCombinations(str) {
    const result = [];
    
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Generate substrings starting from index i
        for (let j = i + 1; j <= str.length; j++) {
            // Add substring to result array
            result.push(str.substring(i, j));
        }
    }
    
    return result;
}

// Test the function
const inputString = 'dog';
const combinations = generateCombinations(inputString);
console.log("Example string:", inputString);
console.log("Expected Output:", combinations.join(","));

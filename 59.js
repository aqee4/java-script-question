//59. Write a JavaScript program to extract the first half of a even string

function extractFirstHalf(str) {
    // Check if the string length is even
    if (str.length % 2 === 0) {
        // Calculate the midpoint
        const midpoint = str.length / 2;
        // Extract the first half of the string
        return str.substring(0, midpoint);
    } else {
        return "The string length is not even.";
    }
}

// Test the function
const str = "abcdefgh";
console.log("Original string:", str);
console.log("First half of the string:", extractFirstHalf(str));

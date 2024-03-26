// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Initialize variable to store the longest word
    let longestWord = words[0]; // Assume the first word is the longest

    // Iterate through each word in the array starting from the second word
    for (let i = 1; i < words.length; i++) {
        // Check if the current word is longer than the current longest word
        if (words[i].length > longestWord.length) {
            // If it is, update the longest word
            longestWord = words[i];
        }
    }

    // Return the longest word
    return longestWord;
}

// Test the function
const exampleString = 'Web Development Tutorial';
const longestWord = findLongestWord(exampleString);
console.log("Example string:", exampleString);
console.log("Expected Output:", longestWord);

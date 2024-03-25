function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Use the reduce function to find the longest word
    const longestWord = words.reduce((longest, current) => {
        // Compare the lengths of the current word and the longest word
        return current.length > longest.length ? current : longest;
    });

    // Return the longest word
    return longestWord;
}

// Test the function
const exampleString = 'Web Development Tutorial';
const longestWord = findLongestWord(exampleString);
console.log("Example string:", exampleString);
console.log("Expected Output:", longestWord);

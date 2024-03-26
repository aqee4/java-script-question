//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Convert the first letter of each word to uppercase
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a single string
    const capitalizedStr = words.join(" ");

    // Return the capitalized string
    return capitalizedStr;
}

// Test the function
const exampleString = 'the quick brown fox';
const capitalizedString = capitalizeFirstLetter(exampleString);
console.log("Example string:", exampleString);
console.log("Expected Output:", capitalizedString);

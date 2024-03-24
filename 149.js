//149. Write a JavaScript program to change the capitalization of all letters in a given string.

function changeCapitalization(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

// Test the function
const originalString = "Hello World";
console.log("Original String:", originalString);
console.log("Changed Capitalization:", changeCapitalization(originalString));

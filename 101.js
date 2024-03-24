//101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 

function isValidString(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        // Check if both characters are letters
        if (!isLetter(currentChar) || !isLetter(nextChar)) {
            return false;
        }

        // Check if both characters have different cases
        if ((currentChar === currentChar.toUpperCase() && nextChar === nextChar.toUpperCase()) ||
            (currentChar === currentChar.toLowerCase() && nextChar === nextChar.toLowerCase())) {
            return false;
        }
    }
    return true;
}

// Function to check if a character is a letter
function isLetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

// Test the function
console.log(isValidString("AbCdeF"));   // true
console.log(isValidString("AbCdEfG"));  // false
console.log(isValidString("HelloWorld"));// false
console.log(isValidString("12345"));    // false

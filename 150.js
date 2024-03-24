//150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

function swapAdjacentDigits(number) {
    // Convert number to string to manipulate digits
    let numStr = number.toString();
    let swappedNumber = '';

    // Loop through digits by pairs
    for (let i = 0; i < numStr.length; i += 2) {
        // Swap adjacent digits
        swappedNumber += numStr[i + 1] + numStr[i];
    }

    // Parse swapped number as integer
    return parseInt(swappedNumber);
}

// Test the function
const number = 123456;
console.log("Original number:", number);
console.log("Swapped number:", swapAdjacentDigits(number));

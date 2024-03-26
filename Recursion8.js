//11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion.



function binaryToDecimal(binaryString) {
    // Base case: If the binary string is empty, return 0
    if (binaryString === '') {
        return 0;
    }
    // Recursive case: Convert the binary string excluding the last digit to decimal,
    // then multiply it by 2 and add the value of the last digit
    return binaryToDecimal(binaryString.slice(0, -1)) * 2 + parseInt(binaryString.slice(-1));
}

// Example usage
const binaryNumber = '1011';
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(`Binary number ${binaryNumber} is equal to decimal number ${decimalNumber}`);

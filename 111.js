//111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one

function findUniqueNumber(num1, num2, num3) {
    if (num1 === num2) {
        return num3;
    } else if (num1 === num3) {
        return num2;
    } else {
        return num1;
    }
}

// Test the function
const num1 = 5;
const num2 = 8;
const num3 = 5;

console.log("The third number among", num1 + ",", num2 + ", and", num3, "is:", findUniqueNumber(num1, num2, num3));

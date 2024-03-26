//Write a JavaScript program that displays the largest integer among two integers

function displayLargestInteger(num1, num2) {
    if (num1 > num2) {
        console.log("The largest integer is:", num1);
    } else if (num2 > num1) {
        console.log("The largest integer is:", num2);
    } else {
        console.log("Both integers are equal.");
    }
}

// Test the function
const integer1 = 10;
const integer2 = 20;
displayLargestInteger(integer1, integer2);

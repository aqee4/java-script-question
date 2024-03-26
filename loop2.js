//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1


// Sample numbers
const num1 = 0;
const num2 = -1;
const num3 = 4;

// Sort the numbers using conditional statements
let sortedNumbers;
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        sortedNumbers = num1 + ", " + num2 + ", " + num3;
    } else {
        sortedNumbers = num1 + ", " + num3 + ", " + num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        sortedNumbers = num2 + ", " + num1 + ", " + num3;
    } else {
        sortedNumbers = num2 + ", " + num3 + ", " + num1;
    }
} else {
    if (num1 >= num2) {
        sortedNumbers = num3 + ", " + num1 + ", " + num2;
    } else {
        sortedNumbers = num3 + ", " + num2 + ", " + num1;
    }
}

// Display the sorted numbers using an alert box
alert("Sorted numbers: " + sortedNumbers);

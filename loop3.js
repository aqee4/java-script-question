//5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
//Sample Output :
//"0 is even"
//"1 is odd"
//"2 is even"

// Iterate from 0 to 15 using a for loop
for (let i = 0; i <= 15; i++) {
    // Check if the current number is even or odd
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

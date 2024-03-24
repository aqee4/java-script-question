//110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function countEvenBeforeFirst(sequence, givenNumber) {
    let count = 0;

    // Iterate through the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current number is the given number
        if (sequence[i] === givenNumber) {
            break; // Stop the loop when the given number is found
        }
        // If the current number is even, increment the count
        if (sequence[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

// Test the function
const sequence = [2, 4, 6, 8, 10, 12, 14, 16];
const givenNumber = 10;
console.log("Number of even values before", givenNumber + ":", countEvenBeforeFirst(sequence, givenNumber));

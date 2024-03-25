//7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".


// for(i=0; i<=100; i++){
//     if(i%3===0){
//         console.log(i + "print Fizz");
//     }else if(i%5===0){
//         console.log(i + "print Buzz");
//     }else{
//         console.log(i);
//     }

// }

// Iterate integers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both three and five
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Check if the number is a multiple of three
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if the number is a multiple of five
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If none of the above conditions are true, simply print the number
    else {
        console.log(i);
    }
}

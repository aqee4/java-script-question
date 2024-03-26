// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"





// Sample array
const myColor = ["Red", "Green", "White", "Black"];

// Join elements into a string using comma as separator
const joinedWithComma = myColor.join(",");
console.log(joinedWithComma);

// Join elements into a string using plus sign as separator
const joinedWithPlus = myColor.join("+");
console.log(joinedWithPlus);

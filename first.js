// Get current date and time

let today=new Date();

// array of the days

let days=['Monday', 'Tuesday' , 'wednesday' , 'Thursday','friday', 'saturday', 
'sunday']

// get the day of the week
let day= days[today.getDay()];

// get current time 

let hours=today.getHours()
let minute=today.getMinutes()
let getSeconds=today.getSeconds()


// Convert hour to AM/PM format
let period = 'AM';
let hour;
if (hour >= 12) {
    period = 'PM';
    if (hour > 12) {
        hour -= 12;
    }
}

// Add leading zero if hour, minute, or second is less than 10
hour = hour < 10 ? '0' + hour : hour;
minute = minute < 10 ? '0' + minute : minute;
second = second < 10 ? '0' + second : second;

// Display the current day and time in the specified format
console.log("Today is: " + day + ".");
console.log("Current time is: " + hour + " " + period + " : " + minute + " : " + second)


console.log(days);

   







////////////////////////Fourth Question//////////////////////////////













////////// 62 Question////////////////////////////////
const givenString = "paython";
function moveLastThreeCharactersToStart(str) {
  // Check if the length of the string is greater than or equal to three
  if (str.length >= 3) {
      // Extract the last three characters
      const lastThreeCharacters = str.slice(-3);

      // Remove the last three characters from the string
      const remainingString = str.slice(0, -3);

      // Move the last three characters to the start and concatenate with the remaining string
      const modifiedString = lastThreeCharacters + remainingString;

      return modifiedString;
  } else {
      return "String length must be greater than or equal to three.";
  }
}

// Example usage

const modifiedString = moveLastThreeCharactersToStart(givenString);
console.log("Original String:", givenString);
console.log("Modified String:", modifiedString);
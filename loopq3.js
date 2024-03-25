//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1


let num1=0;
let num2=-1;
let num3=4;

const sortedNumbers=[num1,num2,num3].sort((a,b)=>b-a);

//Display a sorted number using alert box

console.log("Sorted numbers: " + sortedNumbers.join(", "))




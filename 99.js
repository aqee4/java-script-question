//99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 


function canRearrangeString(str1, str2) {
    // Sort both strings alphabetically
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Test the function
const str1 = "hello";
const str2 = "olelh";

console.log("Can rearrange the characters:", canRearrangeString(str1, str2));

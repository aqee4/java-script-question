//1. Write a JavaScript function to check whether an `input` is an array or not.
//Test Data :
//console.log(is_array('w3resource'));
//console.log(is_array([1, 2, 4, 0]));
//false
//true



function is_array(input) {
    // Use the Array.isArray() method to check if the input is an array
    return Array.isArray(input);
}

// Test the function
console.log(is_array('w3resource')); // Output: false
console.log(is_array([1, 2, 4, 0])); // Output: true

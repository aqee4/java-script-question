//2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object

try {
    // Attempt to access a property of an undefined object
    const obj = undefinedObject.property;
} catch (error) {
    // Handle the 'TypeError' by logging an error message
    console.error("An error occurred:", error.message);
}

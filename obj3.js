//7. Write a JavaScript program that returns a subset of a string.
//Expected Output: ["d", "do", "dog", "o", "og", "g"]


function subsetOfString(str) {
    const subset = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subset.push(str.substring(i, j));
      }
    }
    return subset;
  }
  
  // Sample data
  const sampleString = "dog";
  
  // Displaying the subset of the string
  console.log(subsetOfString(sampleString));
  
const originalArray = [1, 2, [3, 4]];

// Deep copy using JSON.parse and JSON.stringify
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Modify the deep copy
deepCopy[2][0] = 99;

console.log(originalArray);  // Output: [1, 2, [3, 4]]
console.log(deepCopy);       // Output: [1, 2, [99, 4]]

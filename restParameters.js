// rest parameters: can take any number of arguments and put them into an array
const sum = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}


console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// default Parameter Values
const multiply = (a, b = 1) => {
  return a * b;
}

console.log(multiply(5, 2)) // 10
console.log(multiply(5)) // 5
console.log(multiply(5, undefined)) // 5


// Spread Operator
// Template Strings
// Destructuring
// Modules Export / Import
// Set
// Promises
// async / await
// Write a program to combine the numbers of a given array into an array 
// containing all combinations. (reduce)

// doubt
const input = [1, 2];

const combine = (input) => {
  let result = [[]];
  for (i in input) {
    for (j in result) {
      result.push(result[j].concat(input[i]));
    }
  }
  return result;
}

console.log(combine(input));

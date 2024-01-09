// Write a program to combine the numbers of a given array into an array 
// containing all combinations. (reduce)

const input = [1, 2, 3];

const combine = (input) => {
  let result = [[]];
  for (let i = 0; i < input.length; i++) {
    let temp = [];
    for (let j = 0; j < result.length; j++) {
      temp.push(result[j].concat(input[i]));
    }
    result = result.concat(temp);
  }
  return result;
}

console.log(combine(input));

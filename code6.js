// Write a program to filter out the non-unique values in an array.

const input = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7];
output = [1, 3, 7]

const removeDuplicates = (input) => {
  let result = [];
  let freqMap = {};
  for (let i = 0; i < input.length; i++) {
    if (freqMap[input[i]] === undefined) {
      freqMap[input[i]] = 1;
    }
    else {
      freqMap[input[i]]++;
    }
  }


  for (let key in freqMap) {
    if (freqMap[key] === 1) {
      result.push(parseInt(key));
    }
  }
  return result;
}

console.log(removeDuplicates(input));
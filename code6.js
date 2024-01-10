// Write a program to filter out the non-unique values in an array.

const input = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7];
expecteOutput = [1, 3, 7]

const removeDuplicates = (input) => {
  let result = [];
  let freqMap = {};
  for (i in input) {
    if (freqMap[input[i]]) {
      freqMap[input[i]]++;
    } else {
      freqMap[input[i]] = 1;
    }
  }
  console.log("count: ", freqMap);
  for (i in freqMap) {
    if (freqMap[i] === 1) {
      result.push(parseInt(i));
    }
  }
  return result;
}

console.log(removeDuplicates(input));
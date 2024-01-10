// Write a program to convert an array of objects to a string.That contains 
// dynamic columns and de​limiter​ specified

const inputString = [{ col1: 'a', col2: 'b' }]

const convertToString = (input, delimiter) => {
  let result = [];
  let titles = Object.keys(input[0]);
  console.log("titles: ", titles);

  result.push(titles.join(delimiter));
  console.log("result: ", result);
  for (i in input) {
    result.push(Object.values(input[i]).join(delimiter));
  }
  console.log("result: ", result);
  return result.join('\n');
}

console.log(convertToString(inputString, ','));


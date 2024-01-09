// Write a program to convert an array of objects to a string.That contains 
// dynamic columns and de​limiter​ specified

const inputString = [{ col1: 'a', col2: 'b' }]

const convertToCSV = (input, delimiter) => {
  let result = [];
  let titles = Object.keys(input[0]);
  result.push(titles.join(delimiter));

  for (let i = 0; i < input.length; i++) {
    let values = Object.values(input[i]);
    result.push(values.join(delimiter));
  }

  return result.join('\n');
}

console.log(convertToCSV(inputString, ','));


// Write a program to convert string to a 2D array of objects. The first row of the 
// string is used as the title. 

const inputString = 'col1,col2\na,b\nc,d'

const convertStringTo2DArray = (inputString) => {
  let result = [];
  let rows = inputString.split('\n');
  console.log("rows: ", rows);

  // first row is title
  let titles = rows[0].split(',');
  console.log("titles: ", titles);

  // loop through the rest of the rows
  for (i in rows) {
    let obj = {};
    let values = rows[i].split(',');
    console.log("values: ", values);

    for (j in titles) {
      obj[titles[j]] = values[j];
    }

    result.push(obj);
  }

  return result;
}

console.log(convertStringTo2DArray(inputString));
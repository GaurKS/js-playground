// Write a program to convert time 24 hours to 12 hours.

const input = '0';

const convertTime = (input) => {
  let hour = parseInt(input);
  let result = '';
  switch (hour) {
    case 0:
      result = '12am';
      break;
    case 12:
      result = '12pm';
      break;
    case 24:
      result = '12am';
      break;
    default:
      if (hour > 12) {
        result = `${hour - 12}pm`;
      }
      else {
        result = `${hour}am`;
      }
  }
  return result;
}

console.log(convertTime(input));
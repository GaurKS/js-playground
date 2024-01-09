// Write a program that will return true if the string is y/yes and false if the string is 
// n / no. (regex)

const input = 'noo';

const yesOrNo = (input) => {
  const regexY = /^(y|yes)$/i;
  const regexN = /^(n|no)$/i;
  if (regexY.test(input)) {
    return true;
  }
  else if (regexN.test(input)) {
    return false;
  }
  else {
    return "Invalid input";
  }
}


console.log(yesOrNo(input));


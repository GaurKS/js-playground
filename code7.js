// Write a program that will return true if the string is y/yes and false if the string is 
// n / no. (regex)

const input = 'yeso';

const yesOrNo = (input) => {
  const regex = /y|yes/i;
  return regex.test(input);
}


console.log(yesOrNo(input));


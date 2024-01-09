// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do /while - also loops through a block of code while a specified condition is true


// var i = 5;

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);


// for in -> gives keys in objects, gives index in arrays, strings and maps 

// const person = {
//   name: "Rahul",
//   age: 21,
//   city: "Noida"
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// let str = "Hello";

// for (let char in str) {
//   console.log(char);
// }

// const arr = [4, 2, 5, 3, 6]

// arr.forEach(element => {
//   console.log(element);
// });

// for of -> gives the iterable of the data type
const cars = ["BMW", "Volvo", "MiniCooper"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log(text);
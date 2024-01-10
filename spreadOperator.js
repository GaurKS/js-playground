// destriucturing 
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

const { city, age } = { name: 'John', age: 20, city: 'New York', country: 'USA' };
console.log("city: ", city);
console.log("age: ", age);

// spread operator
[a, b, c, ...rest] = [11, 20, 30, 40, 50];

console.log(rest);
console.log(a);

// template string 
const string = `value of rest is [${rest}] value of a is [${a}] value of b is [${b}].`;
console.log(string);

console.log(`The value of a is ${a % 2 === 0 ? 'even' : 'not even'}.`);
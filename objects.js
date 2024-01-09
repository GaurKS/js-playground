const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);

// console.log(returnedTarget === target);

// assign method overrides the common keys in the target object with the source object and add the uncommon keys to it
// create method assigns a base object to the object passed as an argument


// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false,
//   enumerable: true
// });

// console.log(object1);


// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42],
// ]);

// const obj = Object.fromEntries(entries);

// console.log(obj);

// seal() top-level
// freeze() mid level
// preventExtensions() bottom level


const prototype1 = { name: '' };
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1));
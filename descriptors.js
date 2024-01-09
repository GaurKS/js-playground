const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1'); // returns descriptor of the property of the object

console.log(descriptor1);

console.log(descriptor1.value);



const object2 = {
  property1: 42,
  name: "test"
};

const descriptors1 = Object.getOwnPropertyDescriptors(object2); // returns descriptors of all properties of the object

console.log(descriptors1);



const object3 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object3));



const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
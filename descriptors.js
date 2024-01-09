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

const descriptors1 = Object.getOwnPropertyDescriptors(object1); // returns descriptors of all properties of the object

console.log(descriptors1);
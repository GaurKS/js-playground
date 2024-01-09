// Write a program to compare two objects and return true or false.

const obj1 = {
  hair: 'long',
  beard: 'true'
}

const obj2 = {
  hair: 'long',
  beard: "true"
}

const compareObjects = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(compareObjects(obj1, obj2));

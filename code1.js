const obj1 = {
  hair: 'long',
  beard: 'true'
}

const obj2 = {
  hair: 'long',
  beard: 'false'
}

const compareObjects = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(compareObjects(obj1, obj2))

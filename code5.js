// Write a program to replace the names of multiple object keys using descriptors

const obj = { name: 'JJ', job: 'Programmer', age: 22 };
const renameKey = { name: 'firstName', job: 'Role' };

const editObject = (current, diff) => {
  const newKeys = Object.keys(diff);
  console.log('newKeys: ', newKeys);
  for (currKey in current) {
    if (newKeys.find((str) => str === currKey)) {
      current[diff[currKey]] = current[currKey];
      delete current[currKey];
    }
    // console.log("this keys: ", currKeys);
  }
  console.log("new keys: ", newKeys);
  return current
}

console.log(editObject(obj, renameKey));
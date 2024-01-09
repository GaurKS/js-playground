//  Write a program to remove the key-value pairs to the given keys.

const input = { a: 1, b: 2, c: 3 };
const keys = ['b'];

const remove = (input, keys) => {
  for (let i = 0; i < keys.length; i++) {
    delete input[keys[i]];
  }
  return input;
}

console.log(remove(input, keys));
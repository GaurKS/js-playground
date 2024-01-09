const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);

// console.log(children);


const numbers = [65, 44, 12, 4];
numbers.forEach((item, index, arr) => {
  arr[index] = item * 10;
});

// console.log(numbers);

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);

ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]


// filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const res1 = words.filter((word, index, arr) => {
  return arr.indexOf(word) === index;
})

console.log(res1);


// reduce()
const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());


console.log(elements.join(''));

console.log(elements.join('-'));
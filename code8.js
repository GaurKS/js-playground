// Write a program to get a sorted array of objects ordered by properties and
// orders.

const input = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
const orderedBy = ['name', 'age']
const orders = ['asc', 'desc']

const sort = (input, orderedBy, orders) => {
  let result = input.sort((a, b) => {
    console.log("check", a, " - ", b);
    for (let i = 0; i < orderedBy.length; i++) {
      if (a[orderedBy[i]] < b[orderedBy[i]]) {
        return orders[i] === 'asc' ? -1 : 1;
      }
      if (a[orderedBy[i]] > b[orderedBy[i]]) {
        return orders[i] === 'asc' ? 1 : -1;
      }
    }
  });
  return result;
}



console.log(sort(input, orderedBy, orders));

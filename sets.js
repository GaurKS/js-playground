const a = new Set([1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8]);


console.log(a);

a.add(9);
a.add(10);
a.add(9);

console.log(a);
console.log(a.has(9));
console.log(a.values());
console.log(a instanceof Set);
console.log(a.size);
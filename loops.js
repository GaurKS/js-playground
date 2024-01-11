for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

const c = { a: 1 }
const b = { a: 1 }
console.log(c === b);
// explain why is this false?

const a = {}
const w = a

console.log(a === w);
// how can we make it true?
// what is the difference between == and ===?
// what is the difference between let and var?

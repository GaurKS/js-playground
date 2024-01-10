const sum = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

const multiply = (a, b = 1) => {
  return a * b;
}
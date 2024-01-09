var x = 101;
let y = 102;

function usingVar() {  // mutable variable function scoped 
  console.log("--usingVar--");
  if (true) {
    var x = 10;
    console.log(x);
  }
  console.log(x);
}

function usingLet() {  // mutable variable block scoped
  console.log("--usingLet--");
  if (true) {
    let y = 20;
    console.log(y); // Output: 20
  }
  console.log(y);
}


function usingConst() { // immutable variable block scoped 
  console.log("--usingConst--");
  const z = 30;
  console.log(z); // Output: 30
}


usingVar();
console.log("test: ", x);
usingLet();
// usingConst();

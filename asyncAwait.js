async function myFunctionAsync() {
  return "Hello";
}

function myFunction() {
  return Promise.resolve("Hello");
}

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
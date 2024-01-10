// javascript promises are used to handle asynchronous operations in javascript such as reading files, making http requests etc.

// let promise = new Promise(function (resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second send that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 1000);
// });


// promise methods

// promise.all - waits for all promises to resolve and returns an array of results
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

// promise.any - waits for any of the promises to resolve and returns the result
const promise4 = Promise.reject(0);
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise6 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// Promise.any([promise4, promise5, promise6]).then((value) => console.log(value));

// promise.race - waits for the first promise in order to resolve and returns the result
// doubt in this, gettng uncaught error
const promise7 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'one');
});
const promise8 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise7, promise8]).then((value) => {
  console.log(value);
})

// const getPromise = (URL) => {
//   let promise = new Promise(function (resolve, reject) {
//     let req = new XMLHttpRequest();
//     req.open("GET", URL);
//     req.onload = function () {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         reject("There is an Error!");
//       }
//     };
//     req.send();
//   });
//   return promise;
// }

// const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// // We have discussed this function already!
// let promise = getPromise(ALL_POKEMONS_URL);

// const consumer = () => {
//   promise.then(
//     (result) => {
//       console.log({ result }); // Log the result of 50 Pokemons
//     },
//     (error) => {
//       // As the URL is a valid one, this will not be called.
//       console.log('We have encountered an Error!'); // Log an error
//       console.log({ error });
//     });
// }

// consumer();
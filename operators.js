// relational operators


// in operator
const languages = ["HTML", "CSS", "JavaScript"];

// true (index 1 exists in the array) 
console.log(1 in languages);

// false (index 3 doesn't exist in the array) 
console.log(3 in languages);

const Data = {
  name: "Rahul",
  age: 21,
  city: "Noida"
};

// true ("name" property exists in the object) 
console.log("name" in Data);

// false ("gender" property doesn't exist in the object) 
console.log("address" in Data);



// instanceof operator

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);


languages.push("Python");
console.log(languages);
languages.pop();
languages.pop();
languages.pop();
languages.pop();
console.log(languages);
languages.push("Python");
console.log(languages);
// You can have one default export per file. You can give this any name you like. When 
//you import you have to specify a name and import like so:
// import datapoints from './utilities.js';
export default datapoints = [1, 2, 3, 4];


// With named exports, you can have multiple named exports per file.Then import the 
// specific exports you want surrounded in braces:
export const cubeRoot = (a) => {
  return Math.cbrt(a);
}

export const round = (a) => {
  return Math.round(a);
}

export const floor = (a) => {
  return Math.floor(a);
}

// exporting everything in one object
// export default {
//   cubeRoot,
//   round,
//   floor
// }

// exporting as alias
// export default {
//   cubeRoot as cubeRootAlias,
//   round as roundAlias,
//   floor
// }


// For importing below are the syntax
// import { cubeRoot, round, floor } from './utilities.js';
// import { cubeRoot as cubeRootAlias, round as roundAlias, floor } from './utilities.js';
// import * as utilities from './utilities.js';
// import datapoints, { cuberoot } from './utilities.js';
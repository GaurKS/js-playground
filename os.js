const os = require('os')
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("CPUs: ", os.cpus())
// console.log("constants : ", os.constants)
console.log("constants : ", os.endianness())
console.log(os.freemem());
console.log(os.hostname());
console.log(os.loadavg())
console.log(os.userInfo());
console.log(os.release());
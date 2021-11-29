const os = require("os");

console.log("Free Memory",os.freemem());
console.log("cpu", os.cpus());
console.log("Total Memory",os.totalmem());
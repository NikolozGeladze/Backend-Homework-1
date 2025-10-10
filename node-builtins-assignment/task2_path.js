const path = require("path");

console.log("File name:", __filename, '\n');
console.log("Directory name:", __dirname, '\n');
console.log("Joined path:", path.join('Dictionary: ', __dirname, ' File:', __filename), '\n');
const os = require("os");

console.log("Computer Name:", os.hostname(), '\n');
console.log("Username:", os.userInfo().username, '\n');
console.log("OS Type:", os.type(), '\n');
console.log("Home Directory:", os.homedir(), '\n');
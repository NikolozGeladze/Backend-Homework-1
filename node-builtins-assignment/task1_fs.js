const fs = require('fs')

const filePath = 'message.txt';

fs.writeFile(filePath, "Hello Node.js! This is my first file created with fs module.", (err) => {
    if (err) {
        console.error("Error writing to file: ", err);
        return;
    }

    console.log(`File written successfully. \n`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file: ", err);
            return;
        }
        console.log("File Contents: ");
        console.log(data, '\n');
    });
})
const fileManager = require('./fileManager')

fileManager.writeFile('test.txt', 'Hello from Node.js!');

const exists = fileManager.fileExists('test.txt');
console.log('Does file exist?', exists)

if(exists) {
    const content = fileManager.readFile('test.txt');
    console.log('File content is:' , content);
}

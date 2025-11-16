const fs = require('fs');

function readFile(filePath) {
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Erro reading file:', err.message)
    }
}

function writeFile(filePath, content) {
    try{
        fs.writeFileSync(filePath, content);
        console.log('File written successfully!');
    } catch(err) {
        console.error('Error writing file', err.message)
    }
}

function fileExists(filePath) {
    return fs.existsSync(filePath);
}

module.exports = {
    readFile,
    writeFile,
    fileExists
};
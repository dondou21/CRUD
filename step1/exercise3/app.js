const path = require('path')

const fullPath = path.join('user', 'document');

console.log(fullPath)

const anotherPath = path.join('/home', 'user', 'data', 'config')

console.log(anotherPath)


// Get file information

const baseName = path.basename('/home/user/documents/report.pdf')

console.log(baseName)

const baseNameWithoutExt = path.basename('/home/user/documents/report.pdf', '.pdf')

console.log(baseNameWithoutExt)


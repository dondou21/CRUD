const fs = require('fs')

fs.writeFile('data.txt', 'Creation of the file data.txt', (err) => {
    if(err) {
        console.log('Error creating file', err)
        return
    }
    console.log('File create successfully!');

    //reading the file
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    
    })
});


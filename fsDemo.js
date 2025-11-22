import fs from 'fs/promises';

//readFile
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// //Sync
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);


//Promises
fs.readFile('./test.txt', 'utf8')
.then((data) => console.log(data))
.catch((err) => console.log(err))

const  readFile = async () => {
    try{
        const  data = await fs.readFile('test.txt', 'utf8');
        console.log(data);
    }catch (error) {
        console.log(err )
    }
}

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello. I am writting to this file');
        console.log('File written to ....')
    } catch(err) {
        console.log(err);
    }
};

//append file
const appendFile = async() => {
    try{
        await fs.appendFile('./test.txt', '\nThe next line');
        console.log('text appended');
    }catch(err){
        console.log(err);
    }
};

writeFile();
appendFile();
readFile();

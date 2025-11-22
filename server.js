import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, __filename);

const server = http.createServer(async(req, res) => {
   // res.setHeader("Connection", "close");


    try{
        //Check if GET request
        if(req.method === 'GET') {
            let filePath;
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
                
            } else {
                throw new Error('Methode not allowed')
            } 
            const data = await fs.readFile(filePath);
            res.write(data);
            res.end();
        }
    }catch (error) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Server Error</h1>')
    }

});

server.listen(PORT, () =>{
    console.log("Server is running on: " + PORT)
})
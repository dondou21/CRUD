const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/api/products') {
        const products = [
            { id: 1, name: 'Laptop', price: 1250},
            { id: 2, name: 'Mouse', price: 20},
            { id: 3, name: 'Keyboard', price: 50}
        ];
        res.writeHead(200, {'Content-Type' : 'application/json'});

        res.end(JSON.stringify(products));
        return;
    }
     res.end("The API Server");
})

server .listen(3000 , () => {
    console.log("The API server is running......")
})
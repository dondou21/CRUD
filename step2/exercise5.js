// Task: Build a complete server with multiple features.

// Instructions:

// Create completeServer.js
// Combine all previous exercises
// Add error handling
// Add proper status codes



const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const route = urlObj.pathname;
    const query = urlObj.searchParams;

    if(route === '/home'){
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.end('Welcome to HOME PAGE'); 
    } else if(route === '/about'){
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.end('This is ABOUT PAGE'); 
    } else if(route === '/Contact'){
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.end('CONTACT US');
    } else if (route === '/api/products') {
        const products = [
            { id: 1, name: 'Laptop', price: 1250},
            { id: 2, name: 'Mouse', price: 20},
            { id: 3, name: 'Keyboard', price: 50}
        ]

        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(products));
    } else if(route === '/greet') {
        const name = query.get('name');
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`How are you  ${name}`);
    } else if(route === '/search') {
        const q = query.get('q');
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`Are you looing for :  ${q}`);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('API Server is running at port: 3000');
});
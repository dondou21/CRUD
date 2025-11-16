const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/pain'});

    res.end('Hello man');
})

server.listen(3000, () => {
    console.log('Sever is running at: 3000 ');
})
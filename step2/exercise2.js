const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})

    const url = req.url;
    if(url === '/') {
        res.end('This the home page');
    } else if ( url === '/about') {
        res.end('Welcome to the about page');
    } else if( url === '/contact') {
        res.end('Contact Me ')
    } else {
        res.statusCode = 404;
        res.end('Error 404: page ot found');
    }
}).listen(3000, '127.0.0.1', () => {
    console.log('3000 and 127.0.01')
})
const http = require('http');

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const route = urlObj.pathname;
    const query = urlObj.searchParams;

    if(route === '/greet') {
        const name = query.get('name');
        res.end(`How are you  ${name}`);
        return;
    }

    if(route === '/search') {
        const q = query.get('q');
        res.end(`Search for : ${q}`);
        return;
    }

    res.statusCode = 404;
    res.end('Page not found ....');

})

server.listen(3000, () => {
    console.log('Server running ......')
})
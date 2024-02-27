const http = require('http');
const users = require('./mocks/users');

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>Home</h1>')
    }

    if (request.method === 'GET' && request.url === '/users') {
        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    }
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));
const http = require('http');

const server = http.createServer((request, res) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));
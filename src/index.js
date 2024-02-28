const http = require('node:http');
const routes = require('./routes');
const { URL } = require('node:url')

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    // Create a URL reference to get endpoint and ID
    // which assists with routing and handling requests resources
    const parsedURL = new URL(`http://localhost:3000${request.url}`);

    let { pathname } = parsedURL;
    let id = null;

    const splitEndpoint = pathname.split('/').filter(Boolean);

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}:id`;
        id = splitEndpoint[1];
    }

    const route = routes.find((route) => (
        route.endpoint === request.url && route.method === request.method
    ));

    if (route) {
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));
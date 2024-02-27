const users = require("../mocks/users");

module.exports = {
    list(request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    }
}
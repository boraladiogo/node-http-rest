const users = require("../mocks/users");

module.exports = {
    list(request, response) {
        const { orderBy } = request.query;

        const sortedUsers = users.sort((a, b) => {
            if (orderBy === 'desc') {
                return a.id < b.id ? 1 : -1;
            } else {
                return a.id > b.id ? 1 : -1;
            }
        });

        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(sortedUsers));
    }
}
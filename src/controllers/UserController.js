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

        response.send(200, sortedUsers);
    },

    getById(request, response) {
        const { id } = request.params
        const user = users.find((user) => user.id === Number(id));

        response.send(200, user);
    }
}
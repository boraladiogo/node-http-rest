let users = require("../mocks/users");

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
    },

    create(request, response) {
        const { body } = request;
        const lastUserId = users.length + 1;
        const newUser = {
            id: lastUserId,
            ...body,
        }
            
        users.push(newUser);

        response.send(200, newUser);
    },

    update(request, response) {
        const { body } = request;
        const { id } = request.params

        users = users.map((user) => {
            if (user.id === Number(id)) {
                return user = {
                    id: Number(id),
                    ...body,
                }  
            }

            return user;
        });

        response.send(200, {id: Number(id), ...body});
    }
}
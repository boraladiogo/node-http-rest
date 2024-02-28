const UserController = require("./controllers/UserController");

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.list  
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getById
    }
];
const UserController = require('../controller/user.controller')

module.exports = router => {
    router.post('/users', UserController.create)
    router.get('/users', UserController.getAll)
    router.patch('/users/:id', UserController.update)
    router.delete('/users/:id', UserController.delete)

    return router;
}

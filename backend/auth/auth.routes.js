const Users = require('./auth.controller');
module.exports = (router) => {

  router.get('/users',Users.getUser);
  router.get('/users/:id',Users.getUserById);
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
 // router.put('/edit',Users.editUser);
}
const express = require('express');
const toolsController = require('./controllers/toolsController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();

routes.get('/users/list', UsersController.list);
routes.get('/tools/list', toolsController.list);

routes.post('/users/create', UsersController.create);
routes.post('/tools/create', toolsController.create);

routes.post('/users/update/:clienteId', UsersController.update);
routes.post('/tools/update/:ferramentaId', toolsController.update);

routes.delete('/users/delete/:clienteId', UsersController.delete);

module.exports = routes;
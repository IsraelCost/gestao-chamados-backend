const express = require('express');
const routes = express.Router();
const chamadosController = require('./controllers/chamadosController');

routes.get('/chamados', chamadosController.get);
routes.post('/chamados', chamadosController.post);

module.exports = routes;
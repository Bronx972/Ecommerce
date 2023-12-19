'use strict'

var express = require('express');
var reservaController = require('../controllers/reservaController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/registro_reserva',reservaController.crearReserva);
api.get('/obtenerReservas',reservaController.obtenerReservas);
api.get('/listar_reservas',reservaController.listar_reservas);

module.exports = api;
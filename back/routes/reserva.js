'use strict'

var express = require('express');
var reservaController = require('../controllers/reservaController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/registro_reserva',reservaController.crearReserva);

module.exports = api;
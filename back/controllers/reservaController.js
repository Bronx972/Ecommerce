const Reserva = require('../models/reserva');

const crearReserva = async function (req, res) {
    try {
        // Verificar si hay un usuario autenticado en la solicitud
        

        // Obtener los datos del cuerpo de la solicitud
        const data = req.body;

        // Crear una nueva instancia del modelo de Reserva
        const nuevaReserva = new Reserva(data);

        // Guardar la nueva reserva en la base de datos
        const reservaGuardada = await nuevaReserva.save();

        // Enviar la respuesta con los datos de la reserva guardada
        res.status(201).json({ data: reservaGuardada });
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error al crear reserva:', error.message);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};

module.exports = {
    crearReserva
};

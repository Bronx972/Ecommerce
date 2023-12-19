const Reserva = require('../models/reserva');

const crearReserva = async function (req, res) {
    try {
        
        const data = req.body;

        const nuevaReserva = new Reserva(data);

        const reservaGuardada = await nuevaReserva.save();

        res.status(201).json({ data: reservaGuardada });
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir
        console.error('Error al crear reserva:', error.message);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};
const obtenerReservas = async function (req, res) {
    try {
        
        const reservas = await Reserva.find();

        res.status(200).json({ data: reservas });
    } catch (error) {
        
        console.error('Error al obtener reservas:', error.message);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};
const listar_reservas = async function(req,res){
    let reg = await Reserva.find();
    res.status(200).send({data:reg});
}


module.exports = {
    crearReserva,
    obtenerReservas,
    listar_reservas
};

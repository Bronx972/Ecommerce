'use strict';
const { Schema, model } = require('mongoose');


const ReservaSchema = new Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    pais: { type: String, required: false },
    email: { type: String, required: true },
    perfil: { type: String, default: 'perfil.png', required: false },
    telefono: { type: String, required: false },
    genero: { type: String, required: false },
    f_nacimiento: { type: String, required: false },
    dni: { type: String, required: false },
    peso: { type: String, required: false },
    altura: { type: String, required: false },
    comentario: { type: String, required: false },
    createdAt : {type:Date, default:Date.now,require:true}
}, {
    timestamps: true
});

module.exports = model('reserva', ReservaSchema);

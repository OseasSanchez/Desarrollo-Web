const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TópicoSchema = new Schema({
    nombre: String,
    descripción: String,
    // Otros campos
});

const Tópico = mongoose.model('Tópico', TópicoSchema);
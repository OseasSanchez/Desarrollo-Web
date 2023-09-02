// En routes/registros.js

const express = require('express');
const router = express.Router();

// Importa el modelo de Mongoose para los registros
const Registro = require('./registro');

// Ruta para crear un nuevo tópico
router.post('/', async(req, res) => {
    try {
        const nuevoRegistro = new Registro(req.body);
        await nuevoRegistro.save();
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el registro.' });
    }
});

// Ruta para obtener todos los registros
router.get('/', async(req, res) => {
    try {
        const registros = await registro.find();
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los registros.' });
    }
});

// Ruta para obtener un registro por ID
router.get('/:id', async(req, res) => {
    try {
        const registro = await Registro.findById(req.params.id);
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo obtener el registro.' });
    }
});

// Ruta para actualizar un registro por ID
router.put('/:id', async(req, res) => {
    try {
        const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el registro.' });
    }
});

// Ruta para eliminar un registro por ID
router.delete('/:id', async(req, res) => {
    try {
        const registro = await Registro.findByIdAndRemove(req.params.id);
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el registro.' });
    }
});

module.exports = router;
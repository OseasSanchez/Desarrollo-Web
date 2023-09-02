const express = require('express');
const router = express.Router();

// Ruta para crear un nuevo tópico
router.post('/tópicos', (req, res) => {
    // Implementa la lógica para crear un nuevo tópico
});

// Ruta para obtener todos los tópicos
router.get('/tópicos', (req, res) => {
    // Implementa la lógica para obtener todos los tópicos
});

// Ruta para obtener un tópico por ID
router.get('/tópicos/:id', (req, res) => {
    // Implementa la lógica para obtener un tópico por ID
});

// Ruta para actualizar un tópico por ID
router.put('/tópicos/:id', (req, res) => {
    // Implementa la lógica para actualizar un tópico por ID
});

// Ruta para eliminar un tópico por ID
router.delete('/tópicos/:id', (req, res) => {
    // Implementa la lógica para eliminar un tópico por ID
});

module.exports = router;
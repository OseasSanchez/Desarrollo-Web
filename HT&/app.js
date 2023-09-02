const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor

// Configuración de middleware (si es necesario)
app.use(express.json());

// Rutas de la API (se configurarán en el punto 4)
const registrosRouter = require('./modelos/registro.js');
app.use('/api', registrosRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor en funcionamiento en el puerto ${port}');
});
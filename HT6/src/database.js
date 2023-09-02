const mongoose = require('mongoose');

// URL de conexión a MongoDB Atlas
const mongoURI = 'mongodb+srv://osancheza2:oTjSP12EJfwaZ3g3@cluster0.v8x2lzg.mongodb.net/ClimaYDesarrolloDelPaís';

// Configuración de la conexión a MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Manejo de eventos de conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB Atlas');
});
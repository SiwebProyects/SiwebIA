// Servidor principal de Express

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Configurar variables de entorno
dotenv.config();

// Crear la app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Ruta de prueba para comprobar funcionamiento
app.get('/api/ping', (req, res) => {
  res.status(200).send('Servidor funcionando correctamente 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
// Servidor principal de Express

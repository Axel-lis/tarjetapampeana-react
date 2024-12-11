import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import process from 'process'; 
import promocionesRouter from './routes/promociones.js';
import formulariosRouter from './routes/formularios.js';
import prestamosRouter from './routes/prestamos.js';
const app = express();

// Habilitar la configuración de trustProxy
app.set('trust proxy', 1); // Configura para confiar en un proxy

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Analizar solicitudes JSON

app.use('/api/promociones', promocionesRouter);

app.use('/api/formularios', formulariosRouter);

app.use('/api/prestparam', prestamosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} . Conexión con la base de datos exitosa.
`);
});
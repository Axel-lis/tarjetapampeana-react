import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import process from 'process'; 
import promocionesRouter from './routes/promociones.js';

const app = express();

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Analizar solicitudes JSON

app.use('/api/promociones', promocionesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} . Conexión con la base de datos exitosa.
`);
});
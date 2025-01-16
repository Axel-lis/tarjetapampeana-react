import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import promocionesRouter from './routes/promociones.js';
import formulariosRouter from './routes/formularios.js';
import prestamosRouter from './routes/prestamos.js';
import dondeComprar from './routes/comercios.js';
import variablesTarjRouter from './routes/variablesTarj.js';
import prestParamRouter from './routes/prestParam.js';
import cyrRouter from './routes/cyr.js';
const app = express();

// Configuraciones generales
app.set('trust proxy', 1); // Configura para confiar en un proxy
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Analizar solicitudes JSON

// Rutas
app.use('/api/promociones', promocionesRouter);
app.use('/api/variables_tarj', variablesTarjRouter);
app.use('/api/prest_param', prestParamRouter);
app.use('/api/formularios', formulariosRouter);
app.use('/api/cyr', cyrRouter);
app.use('/api/prestamos', prestamosRouter);
app.use('/api/comercios', dondeComprar);
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  next.createError(err.message);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

export default app;

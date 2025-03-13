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
import btnArrepentRouter from './routes/btnArrepent.js';
import paquetesRouter from './routes/paquetes.js';
import csvVariablesTarj from './routes/csvVariablesTarj.js';
import csvPrestParam from './routes/csvPrestParam.js';
import csvPaqParam from './routes/csvPaqParam.js';
import provinciasRoutes from './routes/provinciasRoutes.js';
import localidadesRouter from './routes/localidadesRouter.js';
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
app.use('/api/btn-arrepent', btnArrepentRouter);
app.use('/api/paquetes', paquetesRouter);
app.use('/api', csvVariablesTarj);
app.use('/api', csvPrestParam);
app.use('/api', csvPaqParam);
app.use('/api', provinciasRoutes);
app.use('/api/localidades', localidadesRouter);
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
  res.header('Access-Control-Allow-Origin', 'https://tarjetapampeana.com.ar/paginanueva/dist');
    res.header('Access-Control-Allow-Origin', 'https://tarjetapampeana.com.ar/');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

export default app;

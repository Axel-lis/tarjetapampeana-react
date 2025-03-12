import express from 'express';
import { processCSV } from '../utils/csvHandler3.js';

const router = express.Router();

// Ruta para actualizar el archivo CSV
router.get('/actualizpaqparam', async (req, res) => {
  try {
    await processCSV();
    res.status(200).send('Proceso completado.');
  } catch (error) {
    console.error('Error en la actualización:', error);
    res.status(500).send('Error al procesar el archivo CSV: ' + error.message);
  }
});

export default router;

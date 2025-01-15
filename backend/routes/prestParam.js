import express from 'express';
import { getLastPrestParam } from '../controllers/prestParamController.js';

const router = express.Router();

// Ruta para obtener los parámetros de préstamo
router.get('/', getLastPrestParam);

export default router;

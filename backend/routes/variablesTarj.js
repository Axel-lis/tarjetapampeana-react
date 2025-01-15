import express from 'express';
import { getLastVariablesTarj } from '../controllers/variablesTarjController.js';

const router = express.Router();

// Ruta para obtener las variables de la tarjeta
router.get('/', getLastVariablesTarj);

export default router;

import express from 'express';
const router = express.Router();
import * as prestamosController from '../controllers/prestamosController.js';

// Ruta para calcular la cuota
router.post('/calcular', prestamosController.calcularCuota);

// Ruta para enviar el correo
router.post('/send-email', prestamosController.sendEmail);

export default router;

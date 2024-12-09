import express from 'express';
const router = express.Router();
import rubrosController from '../controllers/rubrosController.js'; 
import comerciosController from '../controllers/comerciosController.js';
import { promocionesController, obtenerNombresPromociones } from '../controllers/promocionesController.js';
import '../models/associations.js'; // Importa el archivo donde defines las asociaciones

// Ruta para obtener promociones
router.get('/buscar-promociones', promocionesController);
// Ruta para obtener solo los nombres de las promociones
router.get('/promociones-nombres', obtenerNombresPromociones);
// Ruta para obtener los rubros con la cantidad de comercios asociados
router.get('/rubros', rubrosController.getRubrosConPromociones);

// Ruta para obtener los comercios
router.get('/buscar-comercios', comerciosController);

export default router;

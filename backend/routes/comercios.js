import express from 'express';
const router = express.Router();
import {obtenerComercios} from '../controllers/comerciosController.js';

//Ruta para obtener los comercios
router.get('/', obtenerComercios);

export default router;
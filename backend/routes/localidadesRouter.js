import express from 'express';
import  {getLocalidades} from '../controllers/localidadesController.js';

const router = express.Router();

// Ruta: GET /api/localidades/:provinciaId
router.get('/:provinciaId', getLocalidades);

export default router;
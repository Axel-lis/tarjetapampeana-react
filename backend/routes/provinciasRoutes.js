import express from 'express';
import  {getProvincias} from '../controllers/provinciasController.js';

const router = express.Router();

router.get('/provincias', getProvincias);

export default router;
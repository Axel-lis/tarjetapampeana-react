import express from 'express';
import { getVariablesTar, getPrestParam } from '../controllers/costosController.js';

const router = express.Router();

router.get('/variables_tarj', getVariablesTar);
router.get('/prest_param', getPrestParam);

export default router;

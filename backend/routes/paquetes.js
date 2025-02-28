import express from 'express';
import PaqParam from '../models/PaqParam.js';

const router = express.Router();

router.get('/paq_param', async (req, res) => {
  try {
    const paqParams = await PaqParam.findAll();
    res.json(paqParams);
  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

export default router;
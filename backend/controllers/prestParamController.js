import PrestParam from '../models/PrestParam.js';

export const getLastPrestParam = async (req, res) => {
  try {
    const prestParam = await PrestParam.findOne({ order: [['id', 'DESC']] });
    if (prestParam) {
      res.json(prestParam);
    } else {
      res.status(404).json({ error: 'No se encontraron registros.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

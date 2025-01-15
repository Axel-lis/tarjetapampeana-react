import VariablesTarj from '../models/VariablesTarj.js';

export const getLastVariablesTarj = async (req, res) => {
  try {
    const variablesTarj = await VariablesTarj.findOne({ order: [['id', 'DESC']] });
    if (variablesTarj) {
      res.json(variablesTarj);
    } else {
      res.status(404).json({ error: 'No se encontraron registros.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

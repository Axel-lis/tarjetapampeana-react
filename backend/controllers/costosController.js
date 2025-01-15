import VariablesTarj from '../models/VariablesTarj.js';
import PrestParam from '../models/PrestParam.js';

// Obtener el último registro de la tabla `variables_tarj`
export const getVariablesTar = async (req, res) => {
  try {
    const result = await VariablesTarj.findOne({
      order: [['id', 'DESC']],
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'No se encontraron registros.' });
    }
  } catch (error) {
    console.error('Error al obtener variables_tarj:', error.message);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

// Obtener el último registro de la tabla `prest_param`
export const getPrestParam = async (req, res) => {
  try {
    const result = await PrestParam.findOne({
      order: [['id', 'DESC']],
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'No se encontraron registros.' });
    }
  } catch (error) {
    console.error('Error al obtener prest_param:', error.message);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

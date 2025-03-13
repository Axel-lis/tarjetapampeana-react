import Localidad from '../models/Localidad.js';

export const getLocalidades = async (req, res) => {
  try {
    const { provinciaId } = req.params;
    if (!provinciaId) {
      return res.status(400).json({ error: 'Se requiere un ID de provincia.' });
    }

    // Obtener localidades ordenadas alfabéticamente por nombre
    const localidades = await Localidad.findAll({
      where: { provincia_id: provinciaId },
      order: [['nombre', 'ASC']], // Ordenar por el campo "nombre" en orden ascendente
    });

    return res.json({ data: localidades });
  } catch (error) {
    console.error('Error al obtener las localidades:', error);
    return res.status(500).json({ error: 'Error al obtener las localidades: ' + error.message });
  }
};

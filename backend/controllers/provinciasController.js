import Provincia from '../models/Provincia.js';

export const getProvincias = async (req, res) => {
  try {
    const provincias = await Provincia.findAll({
      where: {
        id: [2, 4, 13, 21] // Filtra solo los IDs especificados
      }
    });
    return res.json({ data: provincias });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las provincias: ' + error });
  }
};

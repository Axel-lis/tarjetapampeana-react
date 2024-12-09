
import Comercio from '../models/Comercios.js';
import RubroComercios from '../models/RubroComercios.js'; // Modelo de rubro

export const comerciosController = async (req, res) => {
  try {
    // Obtener comercios con la relación a rubro
    const comercios = await Comercio.findAll({
      include: [
        {
          model: RubroComercios,
          as: 'Rubro', // Especificar el alias utilizado en la relación
          attributes: ['descripcion'], // Puedes obtener solo los atributos que necesitas
        },
      ],
      order: [['nombre', 'ASC']], // Ordenar por nombre de comercio, si es necesario
    });

    // Responder con los comercios obtenidos
    res.json({ data: comercios });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

export default comerciosController;

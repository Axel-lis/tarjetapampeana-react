import { Op } from 'sequelize';
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
export const obtenerComercios = async (req, res) => { 
  try {
    // Obtén los parámetros de paginación
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    // Obtén los filtros de localidad y rubro (si están presentes)
    const localidad = req.query.localidad || '';
    const rubro = req.query.rubro || '';

    // Consulta a la base de datos con filtros y paginación
    const { count, rows: comercios } = await Comercio.findAndCountAll({
      where: {
        localidad: {
          [Op.like]: `%${localidad}%`, // Filtrado por localidad
        },
        '$Rubro.descripcion$': {
          [Op.like]: `%${rubro}%`, // Filtrado por rubro
        },
      },
      include: [
        {
          model: RubroComercios,
          as: 'Rubro',
          attributes: ['descripcion'],
        },
      ],
      attributes: ['id', 'fantasia', 'domicilio', 'localidad'],
      order: [['fantasia', 'ASC']],
      limit: pageSize,
      offset: offset,
      //logging: console.log,
    });

    // Formateo de los resultados
    const comerciosFormateados = comercios.map((comercio) => ({
      id: comercio.id,
      nombreFantasia: comercio.fantasia,
      domicilio: comercio.domicilio,
      localidad: comercio.localidad,
      rubro: comercio.Rubro?.descripcion || 'Varios',
    }));
    const totalPages = count > 0 ? Math.ceil(count / pageSize) : 0;
    // Respuesta con datos y meta-información de la paginación
    res.json({
      success: true,
      data: comerciosFormateados,
      meta: {
        totalItems: count,
        currentPage: page,
        pageSize: pageSize,
        totalPages: totalPages,
      },
    });
  } catch (error) {
    console.error('Error al obtener los datos del comercio: ' + error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error al obtener los datos. Por favor, intente más tarde.',
    });
  }
};



export default comerciosController;

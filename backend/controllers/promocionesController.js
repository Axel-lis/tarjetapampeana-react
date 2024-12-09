import { Op } from 'sequelize';
import Promociones from '../models/Promociones.js';

// Función para formatear fechas al formato español
const formatFecha = (fecha) => {
  const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(fecha).toLocaleDateString('es-ES', opciones);
};

// Función para formatear el campo días
const formatDias = (dias) => {
  const diasMap = {
    Do: 'Domingo',
    Lu: 'Lunes',
    Ma: 'Martes',
    Mi: 'Miércoles',
    Ju: 'Jueves',
    Vi: 'Viernes',
    Sa: 'Sábado',
  };

  if (dias === 'DoLuMaMiJuViSa') {
    return 'Todos los días';
  }

  const diasFormateados = dias
    .replace(/-/g, '') // Elimina los guiones
    .match(/.{2}/g)    // Divide en pares de caracteres
    ?.map((dia) => diasMap[dia] || dia); // Reemplaza por el día correspondiente

  return diasFormateados?.join(', ') || dias; // Combina los días formateados
};

export const promocionesController = async (req, res) => {
  try {
    const hoy = new Date();

    // Desestructurar con valores por defecto y validar
    const { 
      page = 1, 
      pageSize = 10, // Cambié 'limit' por 'pageSize' para que coincida con el frontend
      search, 
      rubro, 
      promocion, 
      localidad, 
      dias 
    } = req.query;

    // Validaciones de pagination
    const pageNum = Math.max(1, parseInt(page, 10));  // Página no puede ser menor que 1
    const limitNum = Math.max(10, Math.min(100, parseInt(pageSize, 10)));  // Usar 'pageSize' directamente
    const offset = (pageNum - 1) * limitNum;  // Calcular el offset según la página y el tamaño

    // Construcción dinámica del where con búsqueda global
    const where = {
      [Op.and]: [
        { desde: { [Op.lte]: hoy } },
        { hasta: { [Op.gte]: hoy } }
      ]
    };

    // Añadir filtros opcionales
    if (search) {
      where[Op.or] = [
        { nombre: { [Op.like]: `%${search}%` } },
        { rubro: { [Op.like]: `%${search}%` } },
        { promocion: { [Op.like]: `%${search}%` } },
        { localidad: { [Op.like]: `%${search}%` } }
      ];
    }

    if (rubro) where.rubro = { [Op.like]: `%${rubro}%` };
    if (promocion) where.promocion = { [Op.like]: `%${promocion}%` };
    if (localidad) where.localidad = { [Op.like]: `%${localidad}%` };
    if (dias) where.dias = { [Op.like]: `%${dias}%` };

    // Consulta optimizada
    const { count, rows: promociones } = await Promociones.findAndCountAll({
      where,
      attributes: ['nombre', 'rubro', 'promocion', 'localidad', 'dias', 'hasta'],
      offset,
      limit: limitNum,
      order: [['hasta', 'ASC']], // Ordenar por fecha de expiración
      raw: true // Mejora de rendimiento
    });

    // Formatear resultados
    const promocionesFormateadas = promociones.map(promo => ({
      ...promo,
      hasta: formatFecha(promo.hasta),
      dias: formatDias(promo.dias)
    }));

    // Respuesta con datos de las promociones
    res.json({
      data: promocionesFormateadas,
      currentPage: pageNum,
      totalPages: Math.ceil(count / limitNum),
      totalItems: count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error en el servidor', 
      error: error.message 
    });
  }
};


// Función para obtener solo los nombres de las promociones
export const obtenerNombresPromociones = async (req, res) => {
  try {
    const hoy = new Date();
    const where = {
      desde: { [Op.lte]: hoy },
      hasta: { [Op.gte]: hoy },
    };

    const promociones = await Promociones.findAll({
      where,
      attributes: ['promocion', 'cod_promo'], // Solo obtener los nombres
    });

    // Eliminar duplicados por 'promocion' usando un Set
    const promocionesUnicas = Array.from(new Set(promociones.map((promo) => promo.promocion)))
      .map((promocion) => {
        return promociones.find((promo) => promo.promocion === promocion);
      });

    // Responder con los nombres de las promociones
    const promocionesNombres = promocionesUnicas.map((promo) => ({
      codpro: promo.cod_promo,
      nompro: promo.promocion,
    }));

    res.json({ aaData: promocionesNombres });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

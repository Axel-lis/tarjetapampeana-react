import { Op } from 'sequelize';
import RubroComercios from '../models/RubroComercios.js';
import Promociones from '../models/Promociones.js';
import Sequelize from 'sequelize';
const rubrosController = {
    async getRubrosConPromociones(req, res) {
        try {
            // Obtener la fecha actual
           const fechaActual = new Date().toISOString().split('T')[0];


            // Consultar rubros con cantidad de promociones vigentes
            const rubros = await RubroComercios.findAll({
              attributes: [
                  'descripcion',
                  [Sequelize.fn('COUNT', Sequelize.col('Promociones.id')), 'cantidad_promociones'],
              ],
              include: [{
                  model: Promociones,
                  attributes: [],
                  where: {
                      desde: { [Op.lte]: fechaActual },
                      hasta: { [Op.gte]: fechaActual },
                  },
              }],
              group: ['RubroComercios.id'],
              order: [['descripcion', 'ASC']],
              //logging: console.log, // Agregar para inspeccionar la consulta SQL
          });


            // Transformar el resultado al formato esperado
            const resultado = rubros.map(rubro => 
                `${rubro.descripcion} (${rubro.dataValues.cantidad_promociones})`
            );

            // Responder al cliente
            return res.json(resultado);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al obtener los rubros con promociones vigentes.' });
        }
    },
};

export default rubrosController;

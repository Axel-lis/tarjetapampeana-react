import RubroComercios from './RubroComercios.js';
import Promociones from './Promociones.js';
import Comercios from './Comercios.js';
// Establecer las relaciones entre los modelos
Comercios.hasMany(Promociones, { foreignKey: 'cod_rubro' });
RubroComercios.hasMany(Comercios, { foreignKey: 'cod_rubro' });
RubroComercios.hasMany(Promociones, {
    foreignKey: 'cod_rubro',
    sourceKey: 'codigo', // Asegúrate de apuntar a "codigo"
});

Promociones.belongsTo(RubroComercios, {
    foreignKey: 'cod_rubro',
    targetKey: 'codigo', // Asegúrate de apuntar a "codigo"
});



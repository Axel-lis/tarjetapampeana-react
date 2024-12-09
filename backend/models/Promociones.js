import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import RubroComercios from './RubroComercios.js';

const Promociones = sequelize.define('Promociones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    razon_social: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    puerta: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cod_rubro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RubroComercios,
            key: 'codigo',
        },
    },
    promocion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dias: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desde: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hasta: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'promociones',
    timestamps: false,
});

// Relaciones
Promociones.belongsTo(RubroComercios, { foreignKey: 'cod_rubro' });
export default Promociones;

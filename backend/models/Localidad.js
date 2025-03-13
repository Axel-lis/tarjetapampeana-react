import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Provincia from './Provincia.js';

const Localidad = sequelize.define('Localidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Provincia,
            key: 'id',
        },
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigopostal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'localidad',
    timestamps: false,
});

// Relaciones
Localidad.belongsTo(Provincia, { foreignKey: 'provincia_id' });
Provincia.hasMany(Localidad, { foreignKey: 'provincia_id' });

export default Localidad;
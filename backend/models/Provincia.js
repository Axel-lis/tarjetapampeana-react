import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Provincia = sequelize.define('Provincia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    id_revo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codigo31662: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
}, {
    tableName: 'provincia',
    timestamps: false,
});

export default Provincia;

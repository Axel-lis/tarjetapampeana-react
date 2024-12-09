import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';


const RubroComercios = sequelize.define('RubroComercios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'rubros_comercios',
    timestamps: false,
});



export default RubroComercios;

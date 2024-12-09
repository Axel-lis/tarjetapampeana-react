import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import RubroComercios from './RubroComercios.js';

const Comercios = sequelize.define('Comercios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    empresa: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    sucursal: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    domicilio: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cp: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    localidad: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    provincia: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    tipo_com: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    cuit: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    ib: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    iva: {
        type: DataTypes.STRING(1),
        allowNull: false,
    },
    fantasia: {
        type: DataTypes.STRING(50),
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
}, {
    tableName: 'comercios',
    timestamps: false,
});

// Relaciones
Comercios.belongsTo(RubroComercios, { foreignKey: 'cod_rubro' });

export default Comercios;

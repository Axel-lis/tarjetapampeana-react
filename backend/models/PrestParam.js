import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const PrestParam = sequelize.define(
  'PrestParam',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    periodo: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    perprox: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tem_fin: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tna_fin: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tea_fin: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    cft_fin: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tem_pun: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tna_pun: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tem_ade: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    tem_pre: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    seguro: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    gestion: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    denun: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    refina: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    mora: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    mensual: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    anual: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    porcen: {
      type: DataTypes.DECIMAL(6, 3),
      allowNull: true,
    },
    minimo: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    },
    maximo: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    },
    cuotas: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
    },
    max_mensual: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    },
    msj_resumen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'prest_param',
    timestamps: false, // Si no usas createdAt y updatedAt
  },
);

export default PrestParam;

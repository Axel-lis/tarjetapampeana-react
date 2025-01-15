import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const VariablesTarj = sequelize.define(
  'VariablesTarj',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    periodo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cierre_dia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cierre_mes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cierre_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_dia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_mes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vencimiento_dia_actual: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vencimiento_mes_actual: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vencimiento_anio_actual: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_vencimiento_dia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_vencimiento_mes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proximo_vencimiento_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pago_minimo_porcentaje: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_financiero_pesos_tem_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_financiero_pesos_tna_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_financiero_pesos_tea_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_financiero_pesos_cft_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_punitorio_pesos_tem_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_punitorio_pesos_tna_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_punitorio_pesos_tea_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_punitorio_pesos_cft_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_financiero_pesos_tem_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_financiero_pesos_tna_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_financiero_pesos_tea_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_financiero_pesos_cft_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_punitorio_pesos_tem_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_punitorio_pesos_tna_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    interes_punitorio_pesos_tea_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    interes_punitorio_pesos_cft_proximo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tna_interes_periodo_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tem_interes_periodo_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    tea_interes_periodo_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    cft_interes_periodo_actual: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tna_interes_proximo_periodo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tem_interes_proximo_periodo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    tea_interes_proximo_periodo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    cft_interes_proximo_periodo: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    comision_comun: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_preferencial: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_premium: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_redlink: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    cargo_pagos_externos: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    cargo_consulta_aceptada: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    cargo_transaccion_rechazada: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_refinanciacion: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_cobranza: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_imp_plasticos_extravio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_imp_plasticos_mod_graba: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_imp_plasticos_renovacion_periodo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_imp_plasticos_renovacion_cuotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comision_renovacion: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_renovacion_cuotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comision_emision: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    comision_emision_cuotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'variables_tarj',
    timestamps: false,
  },
);
export default VariablesTarj;

import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

const PaqParam = sequelize.define('paq_param', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  periodo: {
    type: Sequelize.STRING(4),
    allowNull: false,
  },
  periodo2: {
    type: Sequelize.STRING(6),
    allowNull: false,
  },
  lim_com_max_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_max_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_max_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_max_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_com_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_cuo_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_cuo_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_cuo_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_cuo_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_pm_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_pm_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_pm_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lim_pm_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  adel_caj_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  adel_caj_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  adel_caj_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  adel_caj_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_max_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_max_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_max_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_max_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_pre_corp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_pre_clas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_pre_prem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  prest_pre_gold: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  renov_corp: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
  renov_clas: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
  renov_prem: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
  renov_gold: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'paq_param',
});

export default PaqParam;

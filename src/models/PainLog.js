const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PainLog = sequelize.define("PainLog", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  bodyPart: {
    type: DataTypes.STRING,
    allowNull: false
  },

  intensity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  stressLevel: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = PainLog;
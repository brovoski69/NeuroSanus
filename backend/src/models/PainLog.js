const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PainLog = sequelize.define("PainLog", {
  bodyPart: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  intensity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stressLevel: {
    type: DataTypes.STRING,
  },
});

module.exports = PainLog;
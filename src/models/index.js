const sequelize = require("../config/database");
const User = require("./User");
const PainLog = require("./PainLog");

// Relationships (OOPS: Association)
User.hasMany(PainLog, { onDelete: "CASCADE" });
PainLog.belongsTo(User);

const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log("✅ Database tables synced");
};

module.exports = {
  sequelize,
  User,
  PainLog,
  syncDB
};
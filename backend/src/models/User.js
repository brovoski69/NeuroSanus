User.hasMany(PainLog, { foreignKey: "userId" });
PainLog.belongsTo(User, { foreignKey: "userId" });
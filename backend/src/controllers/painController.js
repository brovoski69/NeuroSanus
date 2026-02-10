const PainLog = require("../models/PainLog");

exports.createPainLog = async (req, res) => {
  try {
    const pain = await PainLog.create({
      bodyPart: req.body.bodyPart,
      intensity: req.body.intensity,
      stressLevel: req.body.stressLevel,
      userId: req.user.id,
    });
    res.status(201).json(pain);
  } catch (err) {
    res.status(500).json({ message: "Failed to log pain" });
  }
};

exports.getPainLogs = async (req, res) => {
  try {
    const pains = await PainLog.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(pains);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pain logs" });
  }
};
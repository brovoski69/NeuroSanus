const { PainLog } = require("../models");

exports.createPainLog = async (req, res) => {
  try {
    const { bodyPart, intensity, stressLevel } = req.body;

    const painLog = await PainLog.create({
      bodyPart,
      intensity,
      stressLevel,
      UserId: req.user.id
    });

    res.status(201).json(painLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPainLogsByUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const logs = await PainLog.findAll({
      where: { UserId: userId },
      order: [["createdAt", "DESC"]]
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
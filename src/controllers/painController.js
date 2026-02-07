const { PainLog } = require("../models");

// POST: Create a pain log
exports.createPainLog = async (req, res) => {
  try {
    const painLog = await PainLog.create(req.body);
    res.status(201).json(painLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Get pain logs by user
exports.getPainLogsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const logs = await PainLog.findAll({
      where: { UserId: userId },
      order: [["createdAt", "DESC"]]
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
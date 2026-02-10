const express = require("express");
const router = express.Router();
const { createPainLog, getPainLogs } = require("../controllers/painController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createPainLog);
router.get("/", authMiddleware, getPainLogs);

module.exports = router;
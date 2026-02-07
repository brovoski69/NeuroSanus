const express = require("express");
const router = express.Router();

const painController = require("../controllers/painController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, painController.createPainLog);
router.get("/", authMiddleware, painController.getPainLogsByUser);

module.exports = router;
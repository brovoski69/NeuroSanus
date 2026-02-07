const express = require("express");
const router = express.Router();
const painController = require("../controllers/painController");

// Create pain log
router.post("/", painController.createPainLog);

// Get pain logs for a user
router.get("/:userId", painController.getPainLogsByUser);

module.exports = router;
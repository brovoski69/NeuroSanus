const express = require("express");
const cors = require("cors");
const { syncDB } = require("./models");

const painRoutes = require("./routes/painRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

syncDB();

// Routes
app.use("/api/pain", painRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("NeuroSanus API is running");
});

module.exports = app;
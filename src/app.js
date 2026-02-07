const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
//testing db connection
sequelize.authenticate()
    .then(()=> console.log("MySQL connection established successfully."))
    .catch(err => console.error("MySQL connection error.", err));

app.get("/", (req, res) => {
  res.send("NeuroSanus API is running");
});

module.exports = app;
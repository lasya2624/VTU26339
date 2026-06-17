const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");

// IMPORTANT: Import the model
require("./models/Notification");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

sequelize.sync({ alter: true })
.then(() => {
    console.log("Database Connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => {
    console.log(err);
});
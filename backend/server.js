const express=require("express");

const cors=require("cors");

require("dotenv").config();

const route=require("./routes/notificationRoute");

const app=express();

app.use(cors());

app.use(express.json());

app.use("/api",route);
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.listen(5000,()=>{

console.log("Server running on port 5000");

});
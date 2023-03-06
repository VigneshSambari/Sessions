const express = require("express");
const connectDB = require("./database/db");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000 || process.env.PORT;
connectDB();

app.get("/", (req, res) => {
    return res.json("Running ...")
})

app.listen(PORT, () => console.log("App is running"));
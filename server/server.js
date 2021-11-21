const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const { request } = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

//connectDB
connectDB();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//Route #1
app.get("/", (req, res) => {
  res.send("Server is running");
});

//Route #2 route แบบ auto
//https://locohost:3000/api
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port http://localhost:" + port);
});

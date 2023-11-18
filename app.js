const express = require("express");
const cors = require("cors");
const router = require("./routers/router");
const app = express();
const path = require("path");

console.log(__dirname);

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/dev-data/public")));

app.use("/", router);
module.exports = app;

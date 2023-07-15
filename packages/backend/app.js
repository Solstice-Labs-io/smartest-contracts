// import connectDB from "./config/db.js";
// import express from "express";
const connectDB = require("./config/db");
const express = require("express");
const app = express();
app.use(express.json());

// Connect Database
connectDB();

//Route User
const contractRoute = require("./routes/contractRoute.js");
app.use("/contract", contractRoute);

// Show in browser;
app.get("/", (req, res) => res.send("Get Root"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

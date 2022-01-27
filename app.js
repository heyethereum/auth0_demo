//const express = require("express");
import express from "express";

const app = express();

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Starting server at localhost:${PORT}`);
});

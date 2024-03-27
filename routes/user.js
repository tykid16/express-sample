const express = require("express");
const router = express.Router();

function myLogger(req, res, next) {
  console.log("LOGGED");
  next();
}

router.get("/", myLogger, (req, res) => {
  res.send("ユーザーです。");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`ユーザーID: ${id}`);
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`ユーザーID: ${id}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`ユーザーID: ${id}`);
});

module.exports = router;

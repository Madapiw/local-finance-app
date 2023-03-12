const express = require("express");
const router = express.Router();
const { logging } = require("../middleware/middleware");
const { query } = require("../services/db");
// const dotenv = require("dotenv").config();

/* GET home page. */
router.get("/", logging, function (req, res) {
  res.status(200).send({ message: "Working" });
});

router.get("/db", logging, (req, res) => {
  query("SELECT * FROM Users;", (result) => {
    res.status(200).send(result);
  });
});

module.exports = router;

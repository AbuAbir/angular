const express = require("express");
const router = express.Router();
const { users } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", function (req, res, next) {
  const { email, password } = req.body;

  users.findOne({ email: email }, (error, doc) => {
    if (error || !doc) {
      res.json({
        status: "error",
        message: "Email and Password combination are incorrect.",
      });
      return false;
    }
    bcrypt.compare(password, doc.password, function (err, result) {
      if (err) {
        res.json({
          status: "error",
          message: "Email and Password combination are incorrect.",
        });
        return false;
      }
      const token = jwt.sign({ id: doc._id }, "734987937472948321947127492794872947923748");
      res.json({
        status: "success",
        data: {
          token,
        },
      });
    });
  });
});

module.exports = router;

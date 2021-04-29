const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const { users } = require("../database");

router.post("/", function (req, res, next) {
  const { name, email, password } = req.body;

  users.findOne({ email: email }, (error, doc) => {
    if (error) {
      res.json({ status: "error", message: "Error in DB connection." });
      return false;
    }
    if (doc) {
      res.json({ status: "error", message: "Email already exists" });
      return false;
    } else {
      bcrypt.hash(password, 5, (error, encrypted) => {
        if (error) {
          res.json({ status: "error", message: "Error in saving record." });
          return false;
        }
        users.insert({ name, email, password: encrypted }, (err, doc) => {
          if (err) {
            res.json({ status: "error" });
            return false;
          }
          res.json({
            status: "success",
            data: {
              _id: doc._id,
              name: req.body.name,
              email: req.body.email,
            },
          });
        });
      });
    }
  });
});

module.exports = router;

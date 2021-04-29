const express = require("express");
const router = express.Router();
const { users } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", function (req, res, next) {
  const { password } = req.body;
  const { authorization } = req.headers;

  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "Password cannot be changed for the user.",
      });
      return false;
    }

    users.findOne({ _id: payload.id }, (error, doc) => {
      if (error) {
        res.json({
          status: "error",
          message: "Password cannot be changed for the user.",
        });
        return false;
        
      }

      if (doc) {
        bcrypt.hash(password, 5, (error, encrypted) => {
          users.update(
            {
              _id: payload.id,
            },
            { $set: { password: encrypted } },
            {},
            () => {
              res.json({
                status: "success",
                data: {
                  email: doc.email,
                  name: doc.name,
                },
              });
            }
          );
        });
      } else {
        res.json({
          status: "error",
          message: "Password cannot be changed for the user.",
        });
        return false;
      }
    });
  });
});

module.exports = router;

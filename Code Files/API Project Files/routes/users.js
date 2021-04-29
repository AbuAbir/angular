const express = require("express");
const router = express.Router();
const { users } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/", function (req, res, next) {
  const { authorization } = req.headers;

  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "Please provide Auth Token",
      });
      return false;
    }

    users.find({}, { password: 0 }, (error, docs) => {
      console.log(error, docs);
      res.json({
        status: "success",
        data: docs,
      });
    });
  });
});

router.get("/:id", function (req, res, next) {
  const { authorization } = req.headers;
  const { id } = req.params;

  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "Please provide Auth Token",
      });
      return false;
    }

    users.findOne({ _id : id }, { password: 0 }, (error, docs) => {
      console.log(error, docs);
      res.json({
        status: "success",
        data: docs,
      });
    });
  });
});

module.exports = router;

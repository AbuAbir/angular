var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const { users } = require("../database");

router.post("/", function (req, res, next) {
  const { authorization } = req.headers;
  const { id } = req.body;

  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (payload.id === id) {
      res.json({
        status: "error",
        message: "Cannot add same user as friend",
      });
      return false;
    }

    if (errorpayload) {
      res.json({
        status: "error",
        message: "User needs to be logged in.",
      });
      return false;
    }
    users.findOne({ _id: id }, (error, doc) => {
      if (error || !doc) {
        res.json({
          status: "error",
          message: "Invalid Friend ID.",
        });
        return false;
      }

      users.findOne({ _id: payload.id }, (error, doc) => {
        let friends = doc.friends || [];

        if (friends.includes(id)) {
          res.json({
            status: "error",
            message: "friend already exists.",
          });
          return false;
        }

        friends = [...friends, id];
        users.update(
          { _id: payload.id },
          { $set: { friends: friends } },
          {},
          (error, doc) => {
            if (error) {
              res.json({
                status: "error",
                message: "Invalid Friend ID.",
              });
              return false;
            }
            res.json({
              status: "success",
              data: friends,
            });
          }
        );
      });
    });
  });
});

router.get("/", function (req, res, next) {
  const { authorization } = req.headers;
  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "User needs to be logged in.",
      });
      return false;
    }
    users.findOne({ _id: payload.id }, (error, doc) => {
      let friends = doc.friends || [];
      res.json({
        status: "success",
        data: friends,
      });
    });
  });
});

module.exports = router;

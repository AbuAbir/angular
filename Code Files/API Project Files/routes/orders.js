const express = require("express");
const router = express.Router();
const { orders } = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.get("/:id", function (req, res, next) {
  const { authorization } = req.headers;
  const { id } = req.params;
  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    console.log(errorpayload);
    if (errorpayload) {
      res.json({
        status: "error",
        message: "User needs to be logged in to get orders.",
      });
      return false;
    }
    orders.find({ _id : id, userid : payload.id }, { userid : 0 }, (error, docs) => {
      if (error) {
        res.json({
          status: "error",
          message: "No orders found.",
        });
        return false;
      }
      res.json(docs);
    });
  });
});

router.get("/", function (req, res, next) {
  const { authorization } = req.headers;
  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "User needs to be logged in to get orders.",
      });
      return false;
    }
    orders.find({ userid : payload.id }, { userid : 0 }, (error, docs) => {
      if (error) {
        res.json({
          status: "error",
          message: "No orders found.",
        });
        return false;
      }
      res.json(docs);
    });
  });
});

router.post("/", function (req, res, next) {
  const { cart } = req.body;
  const { authorization } = req.headers;

  if (!cart || !Array.isArray(cart) || !cart.length > 0) {
    res.json({
      status: "error",
      message: "No cart items sent.",
    });
    return false;
  }

  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      res.json({
        status: "error",
        message: "User needs to be logged in to place order.",
      });
      return false;
    }
    orders.insert(
      {
        userid: payload.id,
        items: cart,
        status: "INPROGRESS",
      },
      (error, doc) => {
        if (error) {
          res.json({
            status: "error",
            message: "Error placing order.",
          });
          return false;
        }
        setTimeout(()=>{
          orders.update({ _id : doc._id }, { $set : { status : "DELIVERED" } }, {}, ()=>{
              console.log("order updated.")
          })
        }, 60000 * 2)
        res.json(doc);
      }
    );
  });
});

module.exports = router;

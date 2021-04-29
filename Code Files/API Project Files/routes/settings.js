var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var { users } = require("../database")

router.post('/address', function (req, res, next) {

    const { address } = req.body
    const {  authorization } = req.headers
  jwt.verify(authorization, "734987937472948321947127492794872947923748", (errorpayload, payload) => {
    if (errorpayload) {
      console.log(errorpayload);
      res.json({
        status: "error",
        message: "User needs to be logged in to add address.",
      });
      return false;
    }

    console.log(payload.id)

    users.findOne({ _id: payload.id }, { password: 0 }, (error, doc) => {
      if (error) {
        res.json({
          status: "error",
          message: "Invalid user info passed.",
        });
        return false
      }
      let addresses = doc.addresses || [];
      addresses = [...addresses, address]
      users.update({ _id: payload.id }, { $set: { addresses: addresses } }, {}, (error, docUpdated) => {
        if (error) {
          res.json({
            status: "error",
            message: "Error occured while adding address",
          });
          return false
        }
        res.json({ ...doc, addresses })
      })

    })
  });
});

module.exports = router;

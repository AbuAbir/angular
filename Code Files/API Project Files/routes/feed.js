var express = require("express");
var router = express.Router();
const { feed } = require("../database");

// Uncomment to Insert Mock Date 
// feed.insert({
// 	storeName : "Spice Market",
// 	name : "Indian Thali",
// 	description : "Curry and Naan with Pickles",
// 	price : {
// 		price : 5.99,
// 		discount : 1.99
// 	},
// 	images : [
// 		"http://localhost:3000/images/spices.jpeg"
// 	]
// })

// feed.insert({
// 	storeName : "Fruits Unlimited",
// 	name : "Raspberry",
// 	description : "Box of Raspberrys.",
// 	price : {
// 		price : 0.99,
// 		discount : 0
// 	},
// 	images : [
// 		"http://localhost:3000/images/raspberry.jpeg"
// 	]
// })

// feed.insert({
// 	storeName : "Fruits Unlimited",
// 	name : "Oranges",
// 	description : "Bunch of oranges.",
// 	price : {
// 		price : 0.99,
// 		discount : 0
// 	},
// 	images : [
// 		"http://localhost:3000/images/orange.jpeg"
// 	]
// })

// feed.insert({
// 	storeName : "Fruits Unlimited",
// 	name : "Kiwi",
// 	description : "Kiwi slices",
// 	price : {
// 		price : 0.99,
// 		discount : 0
// 	},
// 	images : [
// 		"http://localhost:3000/images/kiwi.jpeg"
// 	]
// })

// feed.insert({
// 	storeName : "Chocobar",
// 	name : "Pack of Chocolates",
// 	description : "Pack of 24 Assorted Chocolates",
// 	price : {
// 		price : 3.99,
// 		discount : 1.99
// 	},
// 	images : [
// 		"http://localhost:3000/images/chocolate.jpeg"
// 	]
// })

// feed.insert({
// 	storeName : "Coffee Shop",
// 	name : "Coffee",
// 	description : "Large Coffee",
// 	price : {
// 		price : 2.99,
// 		discount : 0
// 	},
// 	images : [
// 		"http://localhost:3000/images/coffee-beans.jpeg"
// 	]
// })

/* GET users listing. */
router.get("/", function (req, res, next) {
  feed.find({}, (error, docs) => {
    if (error) {
      res.json({
        status: "error",
        message: "Cannot get feed items",
      });
      return false;
    }
    res.json(docs);
  });
});

module.exports = router;

var Datastore = require("nedb");

const feed = new Datastore({ filename: "./database/feed.db" });
const users = new Datastore({ filename: "./database/users.db" });
const orders = new Datastore({ filename: "./database/orders.db" });

feed.loadDatabase(function (err) {});
users.loadDatabase(function (err) {});
orders.loadDatabase(function (err) {});

module.exports = {
  feed,
  users,
  orders,
};

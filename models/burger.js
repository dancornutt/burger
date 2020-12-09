const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  update: function(burgerName, devoured, cb) {
    orm.updateOne(burgerName, devoured, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
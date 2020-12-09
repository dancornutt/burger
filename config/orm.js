const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
      let qry = "SELECT * FROM burgers;";
      connection.query(qry, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(burgerName, cb) {
    let qry = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
      connection.query(qry, [burgerName, false], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(id, devoured, cb) {
        let qry =
        "UPDATE burgers SET devoured = 1 WHERE id = ?;";
  
      connection.query(qry,[id],
        function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;
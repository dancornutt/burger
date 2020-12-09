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
    let qry = "INSERT INTO burgers (burger_name) ?;";
      connection.query(qry, burgerName, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(id, devoured, cb) {
        let qry =
        "UPDATE burgers SET ? WHERE ?;";
  
      connection.query(
        qry,[
            {
                devoured: devoured 
            },
            {
                id: id
            }
        ],
        function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;
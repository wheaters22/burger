var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
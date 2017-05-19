var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableName, callback) {
		connection.query(
			"SELECT * FROM ??", [tableName], 
			function(err, result) {
				if (err) throw err;
				console.log(result);
				callback(result);
			}
		);
	},
	insertOne: function(tableName, burger, callback) {
		connection.query(
			"INSERT INTO ?? SET ?", [tableName, burger], 
			function(err, result) {
				if (err) throw err;
				callback(result);
			}
		);
	}, 
	updateOne: function(tableName, devour, burger, callback) {
		connection.query(
			"UPDATE ?? SET ? WHERE ?", [tableName, devour, burger],
			function(err, result) {
				if (err) throw err;
				callback(result);
			}
		);
	}
};

module.exports = orm;
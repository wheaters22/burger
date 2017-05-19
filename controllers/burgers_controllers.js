var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/burger", function(req, res) {
	burger.all(function(data) {
		res.render("index", {burgers: data});
	
	});
});

router.post("/burger", function (req, res) {
	// console.log(req.body.burger_name, req.body.devoured, req.body.date);
	burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured,
		date: req.body.date
	}, function(data) {
		res.json(data);
	});
});

router.put("/:id", function(req, res) {
	burger.update(
		{ id: req.params.id },
		{ devoured: req.body.devoured },
		function(data) {
			res.json(data);
		}
	);
});


module.exports = router;


exports.registration = function (req, res) {
	var bcrypt   = require('bcrypt-nodejs');
	var mongoose = require('mongoose');
	// connection string using mongoose:
	var uri = 'mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority';
	mongoose.connect(uri, {useNewUrlParser:true});
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error: '));
	db.once('open', function (callback) {
		//The code in this asynchronous callback block is executed after connecting to MongoDB. 
		res.render("registration", {
		user: req.user
		});
	});
	
};

/*
collection.find().toArray(function(err, items) {
			res.render("hello", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
			});
*/

exports.mens = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority";

	

	mdbClient.connect(uri, function(err, client) {
	 client.db('test').collection('shop').find({ parent_category_id: "root", id: "mens" }).toArray(function(err, items) {
			res.render("mens", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "ShopList",
				items : items
			});
			client.close();
		  });
	});
};

exports.womens = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority";

	

	mdbClient.connect(uri, function(err, client) {
	 client.db('test').collection('shop').find({ parent_category_id: "root", id: "womens" }).toArray(function(err, items) {
			res.render("womens", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "ShopList",
				items : items
			});
			client.close();
		  });
	});
};


exports.mensProducts = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority";

	

	mdbClient.connect(uri, function(err, client) {
	 client.db('test').collection('shop').find({}).toArray(function(err, items) {
			res.render("mensProducts", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "ShopList",
				items : items
			});
			client.close();
		  });
	});
};

exports.mensClothing = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority";

	

	mdbClient.connect(uri, function(err, client) {
	 client.db('test').collection('shop').find({ }).toArray(function(err, items) {
			res.render("mensClothing", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "ShopList",
				items : items
			});
			client.close();
		  });
	});
};


exports.womensProducts = function(req, res) {
	var _         = require("underscore");
	var mdbClient = require('mongodb').MongoClient;
	var uri = "mongodb+srv://pelinyigit:gnr123sevenfolD@cluster0-ydqc4.mongodb.net/test?w=majority";

	

	mdbClient.connect(uri, function(err, client) {
	 client.db('test').collection('shop').find({ }).toArray(function(err, items) {
			res.render("womensProducts", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "ShopList",
				items : items
			});
			client.close();
		  });
	});
};

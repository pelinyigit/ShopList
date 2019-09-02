exports.registration = function(req, res) {

    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(err, client) {
        client.db('test').collection('shop').find({ parent_category_id: "root", id: "mens" }).toArray(function(err, items) {
            res.render("registration", {

            });
            client.close();
        });
    });
};


exports.mens = function(req, res) {

    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(err, client) {
        client.db('test').collection('shop').find({ parent_category_id: "root", id: "mens" }).toArray(function(err, items) {
            res.render("mens", {
                // Underscore.js lib
                _: _,

                // Template data
                title: "ShopList",
                items: items
            });
            client.close();
        });
    });
};

exports.womens = function(req, res) {
    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(err, client) {
        client.db('test').collection('shop').find({ parent_category_id: "root", id: "womens" }).toArray(function(err, items) {
            res.render("womens", {
                // Underscore.js lib
                _: _,

                // Template data
                title: "ShopList",
                items: items
            });
            client.close();
        });
    });
};

exports.mensProducts = function(req, res) {
    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(_err, client) {
        client.db('test').collection('shop').find({}).toArray(function(err, items) {
            res.render("mensProducts", {
                // Underscore.js lib
                _: _,

                // Template data
                title: "ShopList",
                items: items
            });
            client.close();
        });
    });
};

exports.mensClothing = function(req, res) {
    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(err, client) {
        client.db('test').collection('shop').find().toArray(function(err, items) {
            res.render("mensClothing", {
                // Underscore.js lib
                _: _,

                // Template data
                title: "ShopList",
                items: items
            });
            client.close();
        });
    });
};

exports.womensProducts = function(req, res) {
    var _ = require("underscore");
    var mdbClient = require('mongodb').MongoClient;
    var uri = "mongodb+srv://<username>:<password>@cluster0-ydqc4.mongodb.net/test?w=majority";



    mdbClient.connect(uri, function(err, client) {
        client.db('test').collection('shop').find({}).toArray(function(err, items) {
            res.render("womensProducts", {
                // Underscore.js lib
                _: _,

                // Template data
                title: "ShopList",
                items: items
            });
            client.close();
        });
    });
};

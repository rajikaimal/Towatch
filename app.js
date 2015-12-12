//'use strict'
var express = require('express');
var app = express();

var graphqlHTTP = require('express-graphql');
var _ = require('underscore');

// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/movies');
//var Movie = require('./models/movieModel.js');
var schema = require('./models/schema.js');

var port = 3000;
var bodyParser = require('body-parser');


app.use(bodyParser.json());

movieRouter = require('./routes/movieRoutes.js')();

app.use(express.static(__dirname + "/public"));

app.use('/Movies',movieRouter);

app.get('/',function(req,res){
	res.render('index.html');
});

app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))

app.listen(port,function(req,res){
	console.log("Listening on port " + port);
});
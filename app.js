//'use strict'
//react branch
var express = require('express');
var app = express();
var Movie = require('./models/movieModel.js');
var port = 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/movies');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

movieRouter = require('./routes/movieRoutes.js')(Movie);

app.use(express.static(__dirname + "/public"));

app.use('/Movies',movieRouter);

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(port,function(req,res){
	console.log("Listening on port " + port);
});
var express = require('express');
var app = express();
var Movie = require('./models/movieModel.js');
var port = 3000;
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mymovies');

movieRouter = require('./routes/movieRoutes.js')(Movie);


app.use('/Movies',movieRouter);

app.get('/',function(req,res){
	res.send('Hello');
});


app.listen(port,function(req,res){
	console.log("Listening on port " + port);
});
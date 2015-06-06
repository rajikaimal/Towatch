var express = require('express');
var app = express();
var Movie = require('./models/movieModel.js');
var port = 3000;
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/movies');


var movieRouter = express.Router();
movieRouter.route('/myMovies')
	.get(function(req,res){
		if(req.query.genre){
			var query = req.query;	
		}
		Movie.find(query,function(err,movies){
			if(err)
				console.error(err);
			else
				res.json(movies);
		});
	});


app.use('/Movies',movieRouter);



app.get('/',function(req,res){
	res.send('Hello');
});


app.listen(port,function(req,res){
	console.log("Listening on port " + port);
});
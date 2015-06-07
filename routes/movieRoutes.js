var express = require('express');

var routes = function(Movie){
	var movieRouter = express.Router();

	movieRouter.route('/myMovies')
	.get(function(req,res){
		if(req.query.genre || req.query.title){
			var query = req.query;	
		}
		Movie.find(query,function(err,movies){
			if(err)
				console.error(err);
			else
				console.log(movies);
				res.json(movies);
				
		});
	});

	movieRouter.route('/myMovies/:title')
	.get(function(req,res){
		Movie.find({ title : req.params.title },function(err,movies){
			if(err) throw err;

			res.json(movies);
		});
	});
	return movieRouter;
};

module.exports = routes;
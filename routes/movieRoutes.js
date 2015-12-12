var express = require('express');

var routes = function(){
	var movieRouter = express.Router();

	movieRouter.route('/myMovies')
		.post(function(req,res){
			var query = {
				title : req.body.title,
				genre : req.body.genre,
				watched : 'No'
			};
			//console.log(query);
			// var mov = new Movie(query);
			// mov.save();
		})
		.get(function(req,res){
			if(req.query.genre || req.query.title){
				var query = req.query;	
			}
			Movie.find(query,function(err,movies){
				if(err)
					console.error(err);
				else
					//console.log(movies);
					res.json(movies);
					
			});
	});
	movieRouter.route('/myMovies/remove')
		.post(function(req,res){
			var id = req.body.Id;
			// Movie.findOne({ _id : id},function(err,movie){
			// 	movie.remove();
			// 	res.send('Done');
			// });
		})
	movieRouter.route('/myMovies/:title')
		.get(function(req,res){
			// Movie.find({ title : req.params.title },function(err,movies){
			// 	if(err) throw err;

			// 	res.json(movies);
			// });
		});
		return movieRouter;
};

module.exports = routes;
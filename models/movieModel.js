var mongoose = require('mongoose');
var schema = mongoose.Schema;

var movieModel = new schema({
	title : {
		type : String
	},
	genre : {
		type : String
	},
	watched : {
		type : String
	}
});

module.exports = mongoose.model('Movie', movieModel);
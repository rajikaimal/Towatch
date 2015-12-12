var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var _ = require('underscore');
var movieList = require('./data.js');

var graphqlSchema = function() {
  var Movie = new graphql.GraphQLObjectType({
    name: 'Movie',
    fields: {
      id: { type: graphql.GraphQLInt },
      name: { type: graphql.GraphQLString },
      genre: { type: graphql.GraphQLString },
      watched: { type: graphql.GraphQLString}
    }
  });


  // Define our schema, with one top level field, named `user`, that
  // takes an `id` argument and returns the User with that ID.
  var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        movies: {
          type: new graphql.GraphQLList(Movie),
          resolve: function() {
            return movieList;
          }
        }
      }
    })
  }); 
  return {
    schema: schema
  }; 
}

module.exports = graphqlSchema().schema;

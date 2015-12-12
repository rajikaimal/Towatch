var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var _ = require('underscore');
var data = require('./data.js');

var graphqlSchema = function() {
  var Movie = new graphql.GraphQLObjectType({
    name: 'Movie',
    fields: {
      id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
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
          type: Movie,
          args: {
            id: { type: graphql.GraphQLInt }
          },
          resolve: function (_, args) {
            return data[args.id];
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

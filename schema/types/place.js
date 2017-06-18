const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType
} = require('graphql')


let placeType = new GraphQLObjectType({
    name: 'Place',
    description: 'A place to go',
    fields: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

module.exports = placeType

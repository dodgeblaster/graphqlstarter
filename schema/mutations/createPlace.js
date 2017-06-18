const placeType     = require('../types/place.js')
const fakedb        = require('../../db')
const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')

const createPlace = {
    type: placeType,
    args: {
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    },
    resolve: (root, args, context) => {
        const place = {
            name: args.name,
            age: args.age
        }
        fakedb.places[args.name] = place
        return place
    }
}

module.exports = createPlace

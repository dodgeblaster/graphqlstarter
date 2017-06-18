const placeType     = require('../types/place.js')
const createPlaceFunction = require('../../db/methods/places/createPlace.js')

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

        createPlaceFunction(place)

        return place
    }
}

module.exports = createPlace

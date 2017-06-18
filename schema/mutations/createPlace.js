const placeType     = require('../types/place.js')
const createPlace   = require('../../db/methods/places/createPlace.js')
const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')

const createPlaceMutation = {
    type: placeType,
    args: {
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    },
    resolve: async (root, args, context) => {
        const place = {
            name: args.name,
            age: args.age
        }

        try {
            const result = await createPlace(place)
            return result
        } catch(e) {
            console.log('error')
            throw e
        }
    }
}

module.exports = createPlaceMutation

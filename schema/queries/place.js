const { GraphQLList }   = require('graphql')
const placeType         = require('../types/place.js')
const getAllPlaces      = require('../../db/methods/places/getAllPlaces.js')

const place = {
    type: new GraphQLList(placeType),
    resolve: () => {
        const allPlaces = getAllPlaces()
        return allPlaces
    }
}

module.exports = place

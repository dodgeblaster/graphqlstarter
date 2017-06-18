const { GraphQLList }   = require('graphql')
const placeType         = require('../types/place.js')
const fakedb            = require('../../db')

const returnArray = o => Object.keys(o).map(k => o[k])

const place = {
    type: new GraphQLList(placeType),
    resolve: () => {
        return returnArray(fakedb['places'])
    }
}

module.exports = place

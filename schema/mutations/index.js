const createPlace = require('./createPlace')
const insertPlaces = require('./dev/insertPlaces')
const { GraphQLObjectType } = require('graphql')

let mutationType = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        createPlace: createPlace,
        insertPlaces: insertPlaces
    }
})

module.exports = mutationType

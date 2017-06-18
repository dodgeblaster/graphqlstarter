const createPlace = require('./createPlace')
const { GraphQLObjectType } = require('graphql')

let mutationType = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        createPlace: createPlace
    }
})

module.exports = mutationType

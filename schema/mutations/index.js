const placeType = require('../types/place.js')
const fakedb = require('../../db/index.js')

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')


let mutationType = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        createPlace: {
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
    }
})

module.exports = mutationType

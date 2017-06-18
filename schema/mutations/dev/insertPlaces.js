const insertPlaces = require('../../../db/dev/methods/insertPlaces.js')

const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const insertPlacesMutation = {
    type: GraphQLString,
    resolve: (root, args, context) => {
        if (process.env.NODE_ENV === 'dev') {
            insertPlaces()
            return 'OK!'
        }

        return 'NOT OK!'

    }
}

module.exports = insertPlacesMutation

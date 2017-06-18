const insertPlacesFunction = require('../../../db/methods/insertPlaces.js')

const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const insertPlaces = {
    type: GraphQLString,
    resolve: (root, args, context) => {
        if (process.env.NODE_ENV === 'dev') {
            insertPlacesFunction()
            return 'OK!'
        }

        return 'NOT OK!'

    }
}

module.exports = insertPlaces

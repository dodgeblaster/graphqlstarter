const { GraphQLObjectType } = require('graphql')
const place                 = require('./place.js')

let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        place: place
    }
})

module.exports = queryType

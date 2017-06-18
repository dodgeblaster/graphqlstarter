const { GraphQLSchema } = require('graphql')
const queryType         = require('./queries')
const mutations         = require('./mutations')

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutations
})

module.exports = schema

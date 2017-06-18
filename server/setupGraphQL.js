const graphQLHTTP   = require('express-graphql')


module.exports = app => {
    const schema = require('../schema')

    app.use('/', graphQLHTTP({
        schema: schema,
        pretty: true,
        graphiql: true
    }))
}

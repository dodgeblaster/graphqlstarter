const express 	    = require('express')
const app 		    = express()
const graphQLHTTP   = require('express-graphql')
const schema        = require('./schema')
const buildTables   = require('./db/methods/buildTables.js')

buildTables()

app.use('/', graphQLHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
}))

app.listen('3000', () => {
    console.log('GraphQL is now listening on port 3000!')
})

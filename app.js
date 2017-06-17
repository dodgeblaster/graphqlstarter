const express 	= require('express')
const app 		= express()
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema = {}//require('./schema')


app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
}));

app.listen('3000', () => {
    console.log('GraphQL is now listening on port 3000!')
})

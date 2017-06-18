const buildDatabase = require('./buildDatabase')
const setupMongoose = require('./setupMongoose')
const setupGraphQL  = require('./setupGraphQL')
require('dotenv').config({ path: 'config.env' })

module.exports = app => {

    setupMongoose(app)
    setupGraphQL(app)
    buildDatabase()

    app.listen(process.env.PORT, () => {
        console.log(`GraphQL is now listening on port ${process.env.PORT}!`)
    })
}

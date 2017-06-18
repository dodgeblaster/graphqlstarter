const session       = require('express-session')
const MongoStore    = require('connect-mongo')(session)
const mongoose      = require('mongoose')

module.exports = app => {

    mongoose.connect(process.env.DATABASE)
    mongoose.Promise = global.Promise
    mongoose.connection.on('error', err => {
        console.error(err.message)
    })
    require('../db/models/Place.js')

    app.use(session({
      secret: process.env.SECRET,
      key: process.env.KEY,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    }))
}

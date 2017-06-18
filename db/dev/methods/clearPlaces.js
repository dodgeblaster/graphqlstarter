const mongoose   = require('mongoose')
const Place      = mongoose.model('Place')

module.exports = () => {
    Place.collection.drop()
}

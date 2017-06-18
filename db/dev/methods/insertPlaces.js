const mongoose   = require('mongoose')
const Place      = mongoose.model('Place')
const mockPlaces = require('../mockData/places.js')

module.exports = () => {
    Object.keys(mockPlaces).forEach(k => {
        const newPlace = new Place(mockPlaces[k])
        newPlace.save()
    })
}

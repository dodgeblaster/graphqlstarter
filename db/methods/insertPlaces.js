const db = require('../index.js')
const mockPlaces = require('../mockData/places.js')

module.exports = () => {
    Object.keys(mockPlaces).forEach(k => {
        console.log(k)
        db.places[k] = mockPlaces[k]
    })
}

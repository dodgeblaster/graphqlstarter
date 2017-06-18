const db = require('../../index.js')

module.exports = place => {
    db.places[place.name] = place
}

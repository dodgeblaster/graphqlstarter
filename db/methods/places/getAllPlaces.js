const mongoose  = require('mongoose')
const Place     = mongoose.model('Place')

module.exports = async () => {
    try {
        const places = await Place.find()
        return places
    } catch(e) {
        throw e
    }
}

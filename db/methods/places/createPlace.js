const mongoose  = require('mongoose')
const Place     = mongoose.model('Place')

module.exports = async place => {
    try {
        const result = await (new Place(place)).save()
        return result
    } catch(e) {
        throw e
    }
}

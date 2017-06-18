const mongoose              = require('mongoose')
mongoose.Promise = global.Promise

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please add a place name',
        trim: true
    },
    age: {
        type: Number,
        required: 'Please add an age'
    },

})

placeSchema.pre('save', function(next) {
    next()
})

module.exports = mongoose.model('Place', placeSchema)

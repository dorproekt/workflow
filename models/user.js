const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: String,
    password: {
        type: String,
        required: true
    },
    resetTokken: String,
    resetTokkenExp: Date,
})

module.exports = model('User', userSchema)
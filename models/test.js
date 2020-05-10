const {Schema, model} = require('mongoose')

const test = new Schema({
    title:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model('test', test)